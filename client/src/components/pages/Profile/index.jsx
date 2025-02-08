import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileComponent from 'components/ui/ProfileComponent';

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const auth = useSelector((state) => state.auth);
  const [profileData, setProfileData] = useState({
    imageSrc: '',
    fullName: '',
    email: '',
    username: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.status === 'success') {
      setProfileData({
        imageSrc: auth.result.imageURL,
        fullName: auth.result.fullName,
        email: auth.result.email,
        username: auth.result.username,
      });
    } else {
      navigate('/');
    }
  }, [auth]);

  const previousImage = auth.result.imageURL;

  return (
    <>
      <Helmet>
        <title>{ profileData.fullName }</title>
      </Helmet>
      <ProfileComponent
        edit={ edit }
        setEdit={ setEdit }
        profileData={ profileData }
        setProfileData={ setProfileData }
        previousImage={ previousImage }
      />
    </>
  );
};

export default Profile;
