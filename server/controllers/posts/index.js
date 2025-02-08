import Post from '../../models/Post.js';

const handlePostsResponse = (res, posts, page, perPage) => {
  const PaginatedPosts = PaginatePosts({ posts, page, perPage });
  const PaginatedAndSlicedPosts = SlicePosts({ posts: PaginatedPosts });
  const totalPages = Math.ceil(posts.length / perPage);
  res.send({
    totalPages: totalPages,
    page: page,
    numberOfElements: posts.length,
    perPage: perPage,
    results: PaginatedAndSlicedPosts,
  });
};

const findPosts = (filter) => {
  return Post.find(filter)
    .sort('-createdAt')
    .catch((error) => {
      console.log(error);
      throw new Error('Error fetching posts');
    });
};

const PaginatePosts = ({ posts, page, perPage }) => {
  return posts.slice(page * perPage - perPage, page * perPage);
};

const SlicePosts = ({ posts }) => {
  return posts.map((newPost) => {
    return {
      introtext: newPost.introtext,
      title: newPost.title,
      imageURL: newPost.imageURL,
      slug: newPost.slug,
      id: newPost._id.toString(),
    };
  });
};

export const Posts = async (req, res) => {
  const page = req.query.page;
  const perPage = req.query.perPage;
  const search = req.query.search;
  if (!page || !perPage) {
    res.status(401).send({
      message: 'Please specify the page and perPage parameters',
    });
  }

  const searchFilter = search ? {
    $or: [
      { content: { $regex: search, $options: 'i' } },
      { title: { $regex: search, $options: 'i' } },
    ],
  } : {};

  try {
    const posts = await findPosts(searchFilter);
    handlePostsResponse(res, posts, Number(page), Number(perPage));
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetPostsByTag = async (req, res) => {
  const tag = req.query.tag;
  const page = req.query.page;
  const perPage = req.query.perPage;
  if (!tag) {
    res.status(401).send({
      message: 'Please specify the tag',
    });
    return;
  }
  try {
    const posts = await findPosts({ tags: tag });
    handlePostsResponse(res, posts, Number(page), Number(perPage));
  } catch (error) {
    res.status(500).send(error);
  }
};

export const GetPostsByCategory = async (req, res) => {
  const category = req.query.category;
  const page = req.query.page;
  const perPage = req.query.perPage;
  if (!category) {
    res.status(401).send({
      message: 'Please specify the category',
    });
    return;
  }
  if (!page || !perPage) {
    res.status(401).send({
      message: 'Please specify the page and perPage params',
    });
    return;
  }
  try {
    const posts = await findPosts({ category: category });
    handlePostsResponse(res, posts, Number(page), Number(perPage));
  } catch (error) {
    res.status(500).send(error);
  }
};
