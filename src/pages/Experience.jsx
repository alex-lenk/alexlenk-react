import React, {useEffect} from 'react'

const Experience = () => {
  useEffect(()=> {
    document.title = 'Мой опыт работы'
  }, [])

  return (
    <div className="page__content container">
      <h1>Мой опыт работы</h1>

      <section className="experience">
        <div className="experience__content">
          <div className="experience__content-section">
            <h2 className="text__white">Александр Янковой</h2>

            <p className="text__color2">
              Разработчик с&#160;10-летним опытом. Знаю особенности backend-разработки и&#160;учитываю их&#160;при
              создании фронта.
            </p>

            <p className="text__color2">
              Люблю разрабатывать новые проекты с&#160;нуля: сразу закладываю грамотную архитектуру и&#160;чувствую,
              что делаю действительно крутое и&#160;полезное дело, за&#160;которое не&#160;будет стыдно.
            </p>
          </div>

          <h3 className="text__white">Опыт работы</h3>

          <ol className="experience__work list__un-styled">
            <li className="experience__work-item">
              <div className="experience__work-title">Фронтенд программист</div>
              <div className="experience__work-date">
                <span className="text__white">09.2022&#160;&#8212; по&#160;настоящее время</span>
              </div>
              <div className="experience__work-desk">
                Составлял фронтенд архитектуру. Конфигурировал сборщики проектов. Поддерживал легаси код.
                Ставлю задачи подрядчикам и&#160;контролирую их&#160;выполнение.
              </div>
            </li>

            <li className="experience__work-item">
              <div className="experience__work-title">Фронтенд разработчик</div>
              <div className="experience__work-date">
                <span className="text__white">12.2019&#160;&#8212; 09.2022</span> (2&#160;года 10&#160;месяцев)
              </div>
              <div className="experience__work-desk">
                <ol>
                  <li>Полная фронтенд-разработка нового концепта онлайн-витрины wineexpres.ru</li>
                  <li>Разработка корпоративных сайтов компании</li>
                  <li>Добавление нового функционала на&#160;CMS Bitrix</li>
                </ol>
              </div>
            </li>

            <li className="experience__work-item">
              <div className="experience__work-title">Разработчик фронтенда</div>
              <div className="experience__work-date">
                <span className="text__white">07.2018&#160;&#8212; 12.2019</span> (1&#160;года 6&#160;месяцев)
              </div>
              <div className="experience__work-desk">
                <p>
                  Верстка новых интернет-магазинов на&#160;bitrix (дизайн из&#160;макетов Figma, Illustrator,
                  Photoshop).
                </p>
                <p>
                  Командная фронтэнд разработка компонентов bitrix (HTML+CSS+jQuery/JS+PHP).
                </p>
                <p>
                  Изменения/добавление функционала в&#160;уже существующие проекты компании.
                </p>
                <p>
                  Создание и&#160;поддержка корпоративных сайтов для группы компаний &#171;RDC&#160;Group&#187;.
                </p>
                <p>
                  Верстка лендинг и&#160;акционных страниц.
                  Верстка e-mail писем.
                </p>
                <p>
                  Работаем по&#160;методология scrum. Двух недельные спринты, еженедельные короткие митап встречи,
                  оценки задач по&#160;story points, постановка задач из&#160;JIRA.
                </p>
              </div>
            </li>

            <li className="experience__work-item">
              <div className="experience__work-title">Frontend-разработчик</div>
              <div className="experience__work-date">
                <span className="text__white">11.2017&#160;&#8212; 06.2018</span> (8&#160;месяцев)
              </div>
              <div className="experience__work-desk">
                В&#160;мои обязанности входило:
                <ol>
                  <li>Переверстать всю систему документаоборота согласно новому&#160;UI дизайну (с&#160;чем
                    я&#160;успешно справился).
                  </li>
                  <li>Создание корпоративных сайтов для компании и&#160;её&#160;партнёров от&#160;frontend
                    до&#160;backend реализации;
                  </li>
                  <li>Переделка и&#160;поддержка текущего сайта компании skdo.ru;</li>
                </ol>

                Сотрудничество с&#160;компанией завершил на&#160;хорошей ноте, свою функцию я&#160;выполнил, это
                переделка основной системы https://i.skdo.ru в&#160;ней я&#160;переделал 2&#160;кабинета СРО и&#160;ЧСРО
                и&#160;еще 2&#160;подкабинета.
              </div>
            </li>

            <li className="experience__work-item">
              <div className="experience__work-title">Верстальщик</div>
              <div className="experience__work-date">
                <span className="text__white">07.2017&#160;&#8212; 10.2017</span> (4&#160;месяца)
              </div>
              <div className="experience__work-desk">
                <ol>
                  <li>HTML верстка (HTML+CSS+JavaScript);</li>
                  <li>Интеграция верстки в&#160;MODX&#160;Revolutions;</li>
                  <li>Верстка интернет магазинов;</li>
                  <li>Верстка корпоративных сайтов.</li>
                </ol>
              </div>
            </li>

            <li className="experience__work-item">
              <div className="experience__work-title">Ведущий HTML верстальщик</div>
              <div className="experience__work-date">
                <span className="text__white">07.2016&#160;&#8212; 06.2017</span> (1&#160;год)
              </div>
              <div className="experience__work-desk">
                <p>
                  Руководил группой верстальщиков.
                </p>
                <p>
                  Введение новых верстальщиков в&#160;особенности верстки в&#160;компании.
                </p>
                <p>
                  Верстка макетов (PSD формата adobe photoshop).
                </p>
                <p>
                  Выполнение поставленных задач в&#160;системе Jira на&#160;основе&#160;ТЗ и&#160;макетов.
                </p>
              </div>
            </li>

            <li className="experience__work-item">
              <div className="experience__work-title">HTML-верстальщик</div>
              <div className="experience__work-date">
                <span className="text__white">12.2015&#160;&#8212; 06.2016</span> (7&#160;месяцев)
              </div>
              <div className="experience__work-desk">
                <p>
                  Верстка макетов (png формата adobe fireworks).
                </p>
                <p>
                  Приобрел умение работать в&#160;большой команде и&#160;работать по&#160;workflow.<br/>
                  Умение работать с&#160;GIT.<br/>
                  Приобрел навык работы с&#160;фраемворком django.
                </p>
                <p>
                  Процесс верстки:<br/>
                  Выполнение поставленных в&#160;Jira задач на&#160;основе&#160;ТЗ и&#160;макетов.
                </p>
                <p>
                  Недельные спринты<br/>
                  Обязательный Code Review всех изменений перед выгрузкой.<br/>
                  Обязательное покрытие кода тестами перед выгрузкой.<br/>
                  Ежедневные обсуждения рабочего процесса с&#160;целью введения команды в&#160;курс дела
                  и&#160;оптимизации рабочего
                  процесса.
                </p>
              </div>
            </li>

            <li className="experience__work-item">
              <div className="experience__work-title">Помощник программиста</div>
              <div className="experience__work-date">
                <span className="text__white">12.2015&#160;&#8212; 06.2016</span> (1&#160;год 10&#160;месяцев)
              </div>
              <div className="experience__work-desk">
                <ol>
                  <li>Верстка сайтов (HTML+CSS+jQuery). Верстка с&#160;помощью фраемворков bootstrap \ foundation;</li>
                  <li>Интеграция готовой верстки в&#160;CMS WordPress;</li>
                  <li>Интеграция готовой верстки в&#160;CMS MODX&#160;Revo/Evo;</li>
                  <li>Проверка ошибок на&#160;сайтах и&#160;их&#160;устранение;</li>
                  <li>Создание, распространение и&#160;курирование сайтов.</li>
                </ol>

                <br/>

                  <h5>Изредка в&#160;мои обязанности входило:</h5>

                  <ul className="list__un-styled">
                    <li>&#8212;&#160;Наполнение сайтов текстовой, графической и&#160;другими видами информации;</li>
                    <li>&#8212;&#160;Обучение новых контент-менеджеров;</li>
                    <li>&#8212;&#160;Управления различными хостингами и&#160;их&#160;настройкой;</li>
                    <li>&#8212;&#160;Покупка, настройка доменов. Настройке DNS, веб-почты;</li>
                    <li>&#8212;&#160;Ремонт/замена/чистка железа (ноутбуки, стационарные компьютеры);</li>
                    <li>&#8212;&#160;Настройка ПО&#160;компьютеров;</li>
                    <li>&#8212;&#160;Изредка выполнял обязанности руководителя&#160;IT отдела;</li>
                    <li>&#8212;&#160;Настройка электронных торгов на&#160;госплощадках.</li>
                  </ul>
              </div>
            </li>

            <li className="experience__work-item">
              <div className="experience__work-title">фрилансер</div>
              <div className="experience__work-date">
                <span className="text__white">12.2012&#160;&#8212; 02.2014</span> (1&#160;год 3&#160;месяца)
              </div>
              <div className="experience__work-desk">
                <ol>
                  <li>HTML верстка (HTML+CSS+jQuery);</li>
                  <li>Интеграция верстки в&#160;WordPress;</li>
                  <li>Опыт управления различными хостингами и&#160;их&#160;настройкой;</li>
                  <li>Опыт в&#160;покупке, настройке доменов. Владею знаниями и&#160;опытом в&#160;настройке DNS,
                    веб-почты сервера;
                  </li>
                  <li>Опыт и&#160;умение пользоваться photoshop и&#160;другими графическими редакторами.</li>
                </ol>
              </div>
            </li>
          </ol>
        </div>

        <aside className="experience__side">
          <div className="experience__side-title">&#60;Проектов реализовано&#62;</div>

          <div className="experience__side-content">
            <div className="experience__side-num">350+</div>
            <div className="experience__side-text">
              За&nbsp;10&nbsp;лет разработал несколько сотен сайтов разной тематики и&nbsp;сложности:
              интернет-магазины, сервисы, сайты-визитки, лендинги, блоги и&nbsp;др.
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default Experience
