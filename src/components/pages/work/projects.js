module.exports =  [
    {
      id          : 'construction',
      icon        : '',
      title       : 'Under construction',
      subtitle    : 'Do check out my github page <a href="https://github.com/xmodulus" target="_blank">here!</a>',
      show        : false,
      deprecated  : true,
      description : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      date_start  : '2018-01-01',
      date_end    : '2019-01-01',
      cover_img   : '',
      colour      : 'danger',
      images      : []
    },
    {
      id          : 'memoplusplus',
      icon        : '',
      title       : 'Memo++',
      subtitle    : 'Browser extension that adds features to memo.cash',
      url         : 'https://chrome.google.com/webstore/detail/memo++/efbehadlmgmkdflmmfjnadbnfamloeie',
      github      : 'https://github.com/xmodulus/memoplusplus',
      show        : true,
      deprecated  : false,
      description :   `A browser extension for memo.cash, a decentralised social media platform built on Bitcoin (BCH)
                      <br>
                        <u>Features include:</u>
                      <ul>
                        <li>Tag users as verified</li>
                        <li>Hide posts from certain users</li>
                        <li>Never ending scrolling</li>
                        <li>Fancy UI improvements</li>
                        <li>And more...</li>
                      </ul>
                      `,
      date_start  : '2018-01-01',
      date_end    : '2019-01-01',
      cover_img   : '',
      colour      : 'success',
      images      :
        [
          {
            src: 'https://i.imgur.com/RYc3QRg.png',
            caption: 'Mute users',
          },
          {
            src: 'https://i.imgur.com/QOVtCDj.png',
            caption: 'Fancy UI improvements',
          },
          {
            src: 'https://i.imgur.com/vjrgpKh.png',
            caption: 'Hide posts by muted users',
          },
          {
            src: 'https://i.imgur.com/RswgtSe.png',
            caption: 'Verify users'
          },
          {
            src: 'https://i.imgur.com/H5KKdom.png',
            caption: 'Verified user tag',
          }
        ]
    },
    {
      id          : 'mdash',
      icon        : '',
      title       : '—mdash',
      subtitle    : 'A fully customisable dashboard for your browser. Learn about vue components by making your own widgets!',
      url         : '',
      github      : 'https://github.com/xmodulus/mdash',
      show        : true,
      deprecated  : false,
      description :   `A customisable dashboard built with vuejs.
                      <br><u>Implemented widgets:</u>
                      <ul>
                        <li>Clock</li>
                        <li>Welcome Message</li>
                        <li>Date</li>
                      </ul>
                      <br><u>Widgets WIP</u>
                      <ul>
                        <li>Weather</li>
                        <li>To-do list</li>
                      </ul>`,
      date_start  : '2018-01-01',
      date_end    : '2019-01-01',
      cover_img   : '',
      colour      : 'dark',
      images      : []
    },
    {
      id          : 'speakbagus',
      icon        : '',
      title       : 'SpeakBagus',
      subtitle    : 'ziz.ninja',
      url         : 'https://speakbagus.com',
      github      : '',
      show        : true,
      deprecated  : false,
      description : `A full stack web application.
                     <br><u>Features:</u>
                     <ul>
                       <li>Register/Login users</li>
                       <li>Add courses,modules and quizzes</li>
                       <li>Take quizzes</li>
                       <li>Profile page to show recent activities</li>
                     </ul>`,
      date_start  : '2018-01-01',
      date_end    : '2019-01-01',
      cover_img   : '',
      colour      : 'info',
      images      : []
    },
    {
      id          : 'zizninja',
      icon        : '',
      title       : 'This website',
      subtitle    : 'ziz.ninja',
      url         : 'https://ziz.ninja',
      github      : 'https://github.com/xmodulus/ziz.ninja',
      show        : true,
      deprecated  : false,
      description : 'A good ol\' single page application built with vue.',
      date_start  : '2018-01-01',
      date_end    : '2019-01-01',
      cover_img   : '',
      colour      : 'warning',
      images      : []
    },
    {
      id          : 'aisyabot',
      icon        : '',
      title       : 'AisyaBot',
      subtitle    : 'A telegram bot that utilises wit.ai NLP to interpret intents from natural language.',
      url         : '',
      github      : 'https://github.com/xmodulus/aisyabot',
      show        : true,
      deprecated  : true,
      description :   `Simple telegram bot built with Botman on Laravel.
                        <br><u>Features:</u>
                        <ul>
                          <li>Understands natural language thanks to wit.ai</li>
                          <li>Grabs data from public APIs like data.gov.sg</li>
                          <li>Returns that data to the user</li>
                        </ul>`,
      date_start  : '2018-01-01',
      date_end    : '2019-01-01',
      cover_img   : '',
      colour      : 'warning',
      images      : []
    },
    {
      id          : 'terawhere',
      icon        : '',
      title       : 'Terawhere',
      subtitle    : 'Backend API for a simple app to encourage carpooling during Ramadan.',
      url         : 'https://terawhere.com',
      github      : 'https://github.com/SGTinkers/terawhere-laravel',
      show        : true,
      deprecated  : true,
      description : `Backend API for a simple ridesharing app built in Laravel. A group project with <a href="https://msociety.tech">msociety</a>.
                    <br><u>Features:</u>
                    <ul>
                      <li>Socialite for Social Auth (Facebook, Google)</li>
                      <li>Push notifications</li>
                    </ul>
                    `,
      date_start  : '2018-01-01',
      date_end    : '2019-01-01',
      cover_img   : '',
      colour      : 'primary',
      images      : []
    },
    {
      id          : 'redlist',
      icon        : '',
      title       : 'Redlist Chrome Extension',
      subtitle    : 'A simple chrome extension to keep track of Facebook meanies.',
      url         : '',
      github      : 'https://github.com/xmodulus/Redlist-Chrome-Extension',
      show        : true,
      deprecated  : true,
      description : `<u>Features:</u>
                      <ul>
                        <li>Manipulates Facebook's DOM to add buttons to allow users to "Add User to Redlist".</li>
                        <li>Stores list of user IDs in syncStorage.</li>
                      </ul>`,
      date_start  : '2018-01-01',
      date_end    : '2019-01-01',
      cover_img   : '',
      colour      : 'danger',
      images      : []
    },
    {
      id          : 'makanhero',
      icon        : '',
      title       : 'Makanhero API',
      subtitle    : 'A simple chrome extension to keep track of Facebook meanies.',
      url         : '',
      github      : 'https://github.com/xmodulus/makanhero-api',
      show        : true,
      deprecated  : true,
      description : '',
      date_start  : '2018-01-01',
      date_end    : '2019-01-01',
      cover_img   : '',
      colour      : 'light',
      images      : []
    },
];
