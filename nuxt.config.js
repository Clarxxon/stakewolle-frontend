export default {
  server: {
    host: '0.0.0.0', // default: localhost,
  },
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
  },
  target: 'static',
  head: {
    title: 'Stakewolle',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/fav.svg' },
      { rel: 'apple-touch-icon', type: 'image/svg', href: '/fav.svg'},
      { rel: "canonical", href: "https://stakewolle.com/"},
    ],
    script: [
      {async: true, src: "https://telegram.org/js/telegram-web-app.js"},
      {async: true, src: "https://cdn.ampproject.org/v0.js"},
    ],
    noscript: [
      {style: [
          {body: { "-webkit-animation": "none",  "-moz-animation": "none",  "-ms-animation": "none",  animation: "none"}}
      ]}
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~static/styles/styles.css', lang: 'css', ssr: true },
    { src: '~static/styles/mobile.scss', lang: 'scss', ssr: true },
    { src: '~static/styles/resize.scss', lang: 'scss', ssr: true },
    { src: '~static/styles/_vars.sass', lang: 'scss', ssr: true },
    { src: '~static/styles/loader.scss', lang: 'scss', ssr: true },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              test: 'test',
              cookie: 'We use cookies to make it easy to use the site',
              navigation: {
                about_us: 'About us',
                guide: 'Guide',
                contacts: 'Contacts',
                profit: 'Profit',
                blog: 'Blog'
              },
              welcome: {
                staking_provider: 'staking provider hosted by professionals',
                subtitle: 'The best place for investors with different amounts of assets',
                more: 'Start staking',
                commission: '0% commission until 2023'
              },
              delegates: {
                _1: 'Amount of delegated funds',
                _2: 'Total rewards paid',
                _3: 'Number of delegates',
                title: 'Networks available for staking:'
              },
              profit: {
                title: 'Calculate your profit',
                subtitle: 'Your projected income less commission fees in tokens and in US dollars.<br>Expected annual return is indicated as a percentage of gross and is calculated according to network changes'
              },
              todo: {
                title: 'Future validating networks',
                subtitle: 'networks with great potential that we will support'
              },
              calculator: {
                ed: 'Daily profit',
                em: 'Monthly profit',
                ey: 'Yearly profit',
                how_many: 'How many ',
                do_you: ' do you have',
                year_profit: 'Annual profit',
                stake: 'Stake now',
                apostrof: 's'
              },
              benefits: {
                title: 'Advantages of our nodes',
                subtitle: 'Stakewolle is the best service for investors with assets from $1 to $1 billion. We provide the highest level of security, support and performance optimisation to protect your assets and receive a better return',
                _01: 'We are actively engaged in the expansion of the new generation network and firmly believe in the future of decentralization',
                _02: 'Modern encryption protocols provide a secure and stable infrastructure',
                _03: 'Round-the-clock monitoring network and node updates so that you consistently receive rewards'
              },
              contacts: {
                title: 'Contact us if you:',
                sub_01: 'Want to delegate money in the amount of $500.000',
                sub_02: 'Want to receive an excel report of delegates with the list of transactions for the taxes',
                sub_03: 'Want to cooperate',
                contact_us: 'Contact us',
                name: 'Your name',
                mail: 'Email',
                msg: 'Message',
                send: 'Send',
                thanks: 'Thanks',
                status: 'Your request has been successfully sent'
              },
              popup: {
                welcome: 'Hello!',
                title: 'Delegate to Stakewolle',
                blockchain: 'Blockchain',
                token: 'Token',
                button: 'Delegate',
                apy: 'APY',
                inflation: 'Inflation',
                copy: 'The address is copied to the clipboard',
                calculator: {
                  how_many: 'How many do you have ',
                  year_profit: 'Annual profit',
                  stake: 'Make a bet now',
                  apostrof: 's',
                  tutorial: 'Watch the tutorial',
                  kepler: 'Delegate by Keplr',
                  cosmos: 'Delegate by Cosmostation',
                  ed: 'Daily profit',
                  em: 'Monthly profit',
                  ey: 'Yearly profit',
                  desmos: 'Delegate by Desmos',
                  pingpub: 'Delegate by Pingpub'
                }
              },
              footer: {
                contacts: {
                  title: 'Subscribe to our newsletter',
                  subscribe: 'Subscribe'
                },
                popup: {
                  title: 'Thanks!',
                  subtitle: 'You have successfully subscribed to the newsletter',
                  lock: 'Close'
                },
              },
              stages: {
                quatro: 'quarter',
                _01: 'Opening Stakewolle',
                _02: 'Launching the first validator on the Secret Network Formation of staff and support team',
                _03: 'Launch of the blockchain research and development dept Improve node performance to achieve 100% Uptime',
                _04: 'Running nodes to support Osmosis, Juno, Cosmos, Akash, Band Protocol, Certik, Comdex, Desmos, Ki Chain, Medibloc, SifChain networks',
                _05: 'Launching validators in Bitcanna, Bitsong, Chihuahua, E-money, Fetch, G-Bridge, Kava, Lum, Persistance networks Starting a website with explorer elements',
                _06: 'Introduction of the validator in the Konstellation, Sentinel, Umee, LikeCoin, Nomic, DIG networks Stakewolle validates 99% of the networks in the Cosmos ecosystem',
                _07: 'Opening of media channels: start of the Youtube channel Blogging and writing articles Mass dissemination of the idea of decentralization',
                _08: 'Development. Launching NEAR Protocol, The Graph Implementation of the blockchain node monitoring system by implementing Zabbix, Grafana, Prometheus - (NMS)',
                _09: 'Launching a Faucet Development of a system for automatic tracking of updates and proposals'
              },
              staking: 'Stake',
              about_us_description: 'We are leading staking service providers for blockchain projects<br><br>Join our community to participate in the development of secure networks and receive reward',
              tutorial: {
                delegate: 'Delegate your ',
                bracket_open: '(',
                bracket_lock: ')',
                net: ' net.',
                delegate_button: {
                  delegate: 'Delegate',
                  redelegate: 'Redelegate',
                  undelegate: 'Undelegate'
                },
                step: 'Step',
                of: 'of',
                video: {
                  _01: 'Keplr wallet registration',
                  _02: 'Filling your wallet',
                  _03: 'Choosing a network for staking',
                  _04: 'Redelegate',
                },
                stages: {
                  keplr: {
                    delegate: {
                      title: 'Setting up your Keplr Wallet',
                      step_1: 'INSTALL KEPLR EXTENSION.\n' +
                          'Install the Keplr extension for Chrome and create a new account, or import an account from seed, or connect the extension with your Ledger device (with the Cosmos Ledger App installed and opened). If you are new to the Cosmos ecosystem, Keplr is kind of the Metamask of Cosmos blockchains.',
                      step_2: 'DEPOSIT $ATOM TO YOUR WALLET.\n' +
                          'First, select the Cosmos network of the Keplr wallet by clicking on the network dropdown.',
                      step_3: 'CREATE A NEW DELEGATION. Head over to the Keplr Dashboard and connect your Keplr Wallet extension. Then, click on Cosmos, and then on Stake, located on the left of the page.\n' +
                          'You will see a list of Cosmos validators. Search for Stakewolle and click on Manage. You will see all the staking-related actions. Click on Delegate.',
                      step_4: 'SUCCESS. Wait a few seconds, then your delegation transaction will be processed and you will be staking $ATOM and earning rewards, congratulations!\n' +
                          '\n' +
                          'You can track your Cosmos delegation and rewards at the top of the Keplr Dashboard page.',
                      subtitle: 'Now let`s start staking!'
                    },
                    redelegate: {
                      title: 'Redelegate in your Keplr Wallet',
                      step_3: 'Redelegation to a new validator. Select Dashboard on the sidebar and click the "Manage" button across the validator from which you want to redelegate. Click on the arrow and select Redelegate',
                      step_4: 'Select the validator from the list to which we want to redelegate our tokens. Choose a Stakewolle. Next, enter the amount of tokens and click redelegate.\n' +
                          'Done! You\'ve learned how to redelegate your tokens!',
                    },
                    undelegate: {
                      title: 'Undelegate in your Keplr Wallet',
                      step_3: 'Select the Dashboard on the sidebar and then click the "Manage" button across the validator from which you want to undelegate tokens.',
                      step_4: 'Enter the amount of tokens that you want to undelegate and then click "Undelegate".\n' +
                          '\n' +
                          'That\'s it, you\'ve undelegated tokens to a available balance!\n' +
                          'Attention!\n' +
                          'The freezing period will be 21 days. It means that in 21 days tokens will be credited to the available balance!',
                    }
                  },
                  cosmostation: {
                    delegate: {
                      title: 'Setting up your Cosmostation Wallet',
                      step_1: 'Insert this address into the URL line - https://wallet.cosmostation.io/cosmos Or type "Cosmostation" in the search box You will be redirected to the wallet page',
                      step_2: 'Connect your wallet to Cosmostation. There are 2 outlets to choose from either via Ledger or Keystation. Select Keystation (if you don`t have Ledger). Enter wallet name. Next, enter a password.',
                      step_3: 'In the left sidebar, select the Delegate option. Next, select a validator. In the Delegate column, click Delegate',
                      step_4: 'Wait a few seconds, then your delegation transaction will be processed and you will be staking $ATOM and earning rewards, congratulations!',
                      step_5: 'You can track your Cosmos delegation and awards in the Access Wallet section.'
                    },
                    redelegate: {
                      title: 'Redelegate in your Cosmostation Wallet',
                      step_3: 'Select "Delegate" in the sidebar and click "Redelegate" on the validator from which you want to redelegate. In the opened window select the validator to whom you want to transfer tokens.',
                      step_4: 'Enter the amount of redelegation. You don\'t need to enter a memo. Then click "General & Sign Transaction". Confirm the transaction - click "Allow" and enter your PIN. Click "Done".\n' +
                          '\n' +
                          'Congratulations! Now you know how to redelegate tokens from one validator to another.',
                    },
                    undelegate: {
                      title: 'Undelegate in your Cosmostation Wallet',
                      step_3: 'Select "Delegate" in the sidebar and click "Undelegate" on the validator from which you want to undelegate tokens.',
                      step_4: 'Enter the amount of undelegation. You don\'t need to enter a memo. Then click "General & Sign Transaction". Confirm the transaction - click "Allow" and enter the PIN. Click "Done".\n' +
                          '\n' +
                          'Congratulations! Now you know how to undelegate tokens. \n' +
                          'Attention!\n' +
                          'The freezing period will be 21 days. It means that in 21 days the tokens will be credited to the available balance!',
                    }
                  },
                },
                slider: {
                  left: 'Back',
                  right: 'Next'
                },
                video_title: 'Watch the video from Stakewolle'
              }
            },
            es: {
              test: 'тест',
              cookie: 'Мы используем cookie-файлы, чтобы пользоваться сайтом было удобно',
              navigation: {
                about_us: 'О нас',
                guide: 'Руководство',
                contacts: 'Контакты',
                profit: 'Прибыль',
                blog: 'Блог'
              },
              welcome: {
                staking_provider: 'Стейкинг провайдер от профессионалов',
                subtitle: 'Лучшее место для инвесторов c разными объемами активов',
                more: 'Стейк',
                commission: 'Комиссия 0% до 2023 года'
              },
              delegates: {
                _1: 'Сумма делегированных средств',
                _2: 'Всего выплачено вознаграждений',
                _3: 'Количество делегатов',
                title: 'Сети доступные для стейкинга:'
              },
              todo: {
                title: 'Сети, в которых мы скоро будем валидаторами:',
                subtitle: 'Сети с большим потенциалом, которые мы будем поддерживать'
              },
              profit: {
                title: 'Рассчитайте свой доход',
                subtitle: 'Ваш прогнозируемый доход за вычетом комиссий в токенах и в долларах США.<br>Ожидаемая годовая доходность указывается в процентах брутто и рассчитывается с учетом сетевых изменений.'
              },
              calculator: {
                ed: 'Ежедневный доход',
                em: 'Ежемесячный доход',
                ey: 'Ежегодный доход',
                how_many: 'Сколько у вас ',
                year_profit: 'Годовой доход',
                stake: 'Сделать ставку сейчас',
                apostrof: 'ов'
              },
              benefits: {
                title: 'Преимущества наших нод',
                subtitle: 'Stakewolle - лучшее место для инвесторов с активами более 500 тысяч долларов.<br>Мы обеспечиваем высочайший уровень безопасности, поддержки и оптимизации производительности для защиты ваших активов и получения максимальной прибыли.',
                _01: 'Активно участвуем в расширении сети нового поколения и твердо верим в будущее децентрализации!',
                _02: 'Современные протоколы шифрования, обеспечивают безопасную и стабильную инфраструктуру.',
                _03: 'Круглосуточно следим за обновлениями сетей и нод, что бы вы стабильно получали вознаграждения.'
              },
              contacts: {
                title: 'Свяжитесь с нами, если вы:',
                sub_01: 'Хотите заделегировать сумму от 500.000$',
                sub_02: 'Хотите получить excel отчёт делегатов со списком транзакций для налоговой',
                sub_03: 'По вопросам сотрудничества',
                contact_us: 'Связаться с нами',
                name: 'Ваше имя',
                mail: 'Email',
                msg: 'Сообщение',
                send: 'Отправить',
                thanks: 'Спасибо',
                status: 'Ваше обращение успешно отправлено'
              },
              footer: {
                contacts: {
                  title: 'Подпишитесь, чтобы первыми узнавать новости',
                  subscribe: 'Подписаться'
                },
                popup: {
                  title: 'Спасибо',
                  subtitle: 'Вы успешно подписались на рассылку',
                  lock: 'закрыть'
                },
              },
              popup: {
                welcome: 'Здравствуйте!',
                title: 'Делегируйте на Stakewolle',
                blockchain: 'Блокчейн',
                token: 'Токен',
                button: 'Делегировать',
                copy: 'Адрес скопирован в буфер обмена',
                apy: 'API',
                inflation: 'Инфляция',
                calculator: {
                  how_many: 'Сколько у вас ',
                  year_profit: 'Годовой доход',
                  stake: 'Сделать ставку сейчас',
                  apostrof: 'ов',
                  tutorial: 'Смотреть туториал',
                  kepler: 'Делегировать через Keplr',
                  cosmos: 'Делегировать через Cosmostation',
                  ed: 'Ежедневный доход',
                  em: 'Ежемесячный доход',
                  ey: 'Ежегодный доход',
                  desmos: 'Делегировать через Desmos',
                  pingpub: 'Делегировать через Pingpub'
                }
              },
              stages: {
                quatro: 'квартал',
                _01: 'Открытие Stakewolle',
                _02: 'Запуск первого валидатора в сети Secret Network Формирование штата и запуск комманды саппорта',
                _03: 'Запуск отдела блокчейн исследований и разработок Повышение производительности нод для достижения 100% Uptime',
                _04: 'Поднятие нод для поддержки сетей Osmosis, Juno, Cosmos, Akash, Band Protocol, Certik, Comdex, Desmos, Ki Chain, Medibloc, SifChain',
                _05: 'Запуск валидаторов в сетях Bitcanna, Bitsong, Chihuahua, E-money, Fetch, G-Bridge, Kava, Lum, Persistance Старт сайта с элементами exlporer',
                _06: 'Запуск валидатора в сетях Konstellation, Sentinel, Umee, LikeCoin, Nomic, DIG Stakewolle валидирует 99% сетей в экосистеме Cosmos',
                _07: 'Открытие медиаканалов: старт канала Youtube Ведение блога и написание статей Массовое распространение идеи децентрализации',
                _08: 'Расширение. Запуск NEAR Protocol, The Graph. Внедрение системы мониторинга блокчейн нод путем внедрения Zabbix, Grafana, Prometheus - (NMS)',
                _09: 'Запуск Faucet (крипто кран) Разработка системы автоматического трекинга обовлений и отслеживания пропозалов'
              },
              staking: 'Стейкинг',
              about_us_description: 'Мы являемся ведущим поставщиком стейкинг-услуг для блокчейн-проектов.<br>Присоединяйтесь к нашему сообществу, чтобы участвовать в развитии защищенных сетей и получать вознаграждения за это!<br>Мы знаем о стекинге всё.',
              tutorial: {
                delegate: 'Делегировать ваш ',
                bracket_open: '(',
                bracket_lock: ')',
                net: ' сеть',
                delegate_button: {
                  delegate: 'Делегирование',
                  redelegate: 'Ределегирование',
                  undelegate: 'Анделегирование'
                },
                step: 'Шаг',
                of: 'из',
                video: {
                  _01: 'Регистрация кошелька Keplr',
                  _02: 'Пополнение кошелька',
                  _03: 'Выбор сети длля стейкинга',
                  _04: 'Ределегейт',
                },
                setting_up_kepler: 'Настройка вашего кошелька Kepler',
                setting_up_cosmostation: 'Настройка вашего кошелька Cosmostation',
                redelegate_kepler: 'Ределегейт в вашем кошельке Keplr',
                undelegate_kepler: 'Разделегейт в вашем кошельке Keplr',
                redelegate_cosmostation: 'Ределегейт в вашем кошельке Cosmostation',
                undelegate_cosmostation: 'Разделегейт в вашем кошельке Cosmostation',
                stages: {
                  keplr: {
                    delegate: {
                      title: 'Установка кошелька Keplr',
                      step_1: 'УСТАНОВИТЕ РАСШИРЕНИЕ KEPLR.\n' +
                          'Установите расширение Keplr для Chrome и создайте новую учетную запись, либо импортируйте учетную запись из seed, либо подключите расширение к своему устройству Ledger (с установленным и открытым приложением Cosmos Ledger). Если вы новичок в экосистеме Cosmos, Keplr — это своего рода блокчейны Metamask для Cosmos.\n',
                      step_2: 'ВНЕСТИ АТОМ $ НА ВАШ КОШЕЛЕК.\n' +
                          'Сначала выберите сеть Cosmos кошелька Keplr, щелкнув раскрывающееся меню сети. И нажмите "Депозит" - в открывшемся окне просканируйте QR код для пополнения. Или скопируйте публичный ключ.\n',
                      step_3: 'СОЗДАТЬ НОВУЮ ДЕЛЕГАЦИЮ.\n' +
                          'Перейдите на панель инструментов Keplr и подключите расширение Keplr Wallet. Затем нажмите на Космос, а затем на Ставку, расположенную в левой части страницы.\n' +
                          'Вы увидите список валидаторов Cosmos. Найдите Stakewolle и нажмите «Управление». Вы увидите все действия, связанные со стекингом. Нажмите «Делегировать».\n',
                      step_4: 'ГОТОВО!\n' +
                          'Подождите несколько секунд, после чего ваша транзакция делегирования будет обработана, теперь вы разместили $ATOM и получаете вознаграждение, поздравляем!\n' +
                          'Вы можете отслеживать свою делегацию Cosmos и награды в верхней части страницы панели инструментов Keplr.',
                      subtitle: 'Поздравляем - Вы застейкали'
                    },
                    redelegate: {
                      title: 'Ределегирование на другого валидатора',
                      step_3: 'Выбираем на сайтбаре пункт Дашборд. И нажимаем кнопку Менедж валидатора, с которого хотим переделегировать. Нажимаем на стрелку и выбираем Ределегировать',
                      step_4: 'Выбираем валидатора из выпадающего списка на которого хотим переделегировать свои токены. Выбираем Стакволл. Далее вводим сумму и нажимаем ределегирвание.\n' +
                          'Готово! Вы научились ределегировать!',
                    },
                    undelegate: {
                      title: 'Анделегирование с валидатора',
                      step_3: 'Выбираем на сайтбаре пункт Дашборд. И нажимаем кнопку Менедж возле валидатора, с которого хотим снять токены.',
                      step_4: 'Вводим сумму токенов, которые хотим снять и жмем Анделегейт.\n' +
                          '\n' +
                          'Готово, вы сняли токены на свободный баланс!\n' +
                          'ВНИМАНИЕ!\n' +
                          'Период заморозки будет 21 день. Значит, что через 21 день токены будут зачислены на свободный банас!',
                    }
                  },
                  cosmostation: {
                    delegate: {
                      title: 'Установка кошелька Comsostation',
                      step_1: 'Переходим на сервис кошелька Cosmostation\n' +
                          'Вставьте этот адрес в строку URL - https://wallet.cosmostation.io/cosmos\n' +
                          'Или введите в поисковую строку "Cosmostation".\n' +
                          'Вы будете перенаправлены на страницу кошелька',
                      step_2: 'Подключите свой кошелек к Cosmostation\n' +
                          'Есть две опции на выбор через Ledger или Keystation. Выберите Keystation (если у вас нет Ledger). Введите имя кошелька. Далее введите пароль.',
                      step_3: 'СОЗДАТЬ НОВУЮ ДЕЛЕГАЦИЮ. На левой боковой панели выберите параметр «Делегировать». Далее выберите валидатора. В столбце «Делегировать» нажмите «Делегировать».',
                      step_4: 'ГОТОВО\n' +
                          'Подождите несколько секунд, после чего ваша транзакция делегирования будет обработана, теперь вы разместили $ATOM и получаете вознаграждение, поздравляем!\n' +
                          'Вы можете отслеживать свою делегацию и награды Cosmos в разделе Access Wallet.',
                    },
                    redelegate: {
                      title: 'Ределегирование\n' +
                          'на нового валидатора\n',
                      step_3: 'Выбираем на сайтбаре пункт Делегейт. И нажимаем кнопку Ределегейт возле валидатора, с которого хотим переделегировать. В открывшемся окне выбираем валидатора на котого хотим перевести токены',
                      step_4: 'Вводим сумму для ределегирования. Мемо - вводить не требуется. И жмем General & Sign Transaction. Подверждаем транзакцию - нажимаем Аллоу и вводим PIN. Жмем готово.\n' +
                          '\n' +
                          'Поздравляем! Вы умеете ределегировать токены с одного валидатора на другого.',
                    },
                    undelegate: {
                      title: 'Анделегирование с валидатора',
                      step_3: 'Выбираем на сайтбаре пункт Делегирование. И нажимаем кнопку Анделегейт возле валидатора, с которого хотим снять токены.',
                      step_4: 'Вводим сумму для снятия. Мемо - вводить не треубется. И жмем General & Sign Transaction. Подверждаем транзакцию - нажимаем Аллоу и вводим PIN. Жмем готово.\n' +
                          '\n' +
                          'Поздравляем! Вы умеете анделегировать/снимать токены. \n' +
                          'ВНИМАНИЕ!\n' +
                          'Период заморозки будет 21 день. Значит, что через 21 день токены будут зачислены на свободный банас!'
                    }
                  },
                },
                slider: {
                  left: 'Назад',
                  right: 'Вперед'
                },
                video_title: 'Посмотрите видео от Stakewolle'
              }
            }
          }
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
