
/* DATA */
const tools=[
  {name:'Maltego',url:'https://maltego.com',icon:'🕸️',tags:['graph','network'],cat:'network',type:'Desktop',desc:{ru:'Визуальный анализ связей между людьми, доменами, IP и организациями. Строит графы взаимосвязей при расследованиях.',en:'Visual link analysis between people, domains, IPs and organizations. Builds relationship graphs for investigations.'}},
  {name:'Shodan',url:'https://shodan.io',icon:'🔍',tags:['iot','scan'],cat:'network',type:'Web API',desc:{ru:'Поисковик по устройствам подключённым к интернету: серверы, камеры, роутеры. Находит открытые порты и уязвимые сервисы.',en:'Search engine for internet-connected devices: servers, cameras, routers. Find open ports and vulnerable services worldwide.'}},
  {name:'Censys',url:'https://censys.io',icon:'🌐',tags:['network','certs'],cat:'network',type:'Web API',desc:{ru:'Поисковик по интернет-инфраструктуре с акцентом на TLS-сертификаты и открытые порты.',en:'Internet infrastructure search engine focused on TLS certificates and open ports.'}},
  {name:'ZoomEye',url:'https://www.zoomeye.org',icon:'🔭',tags:['iot','scan'],cat:'network',type:'Web API',desc:{ru:'Китайский аналог Shodan — поиск уязвимых устройств и сервисов. Особенно полезен для азиатского сегмента.',en:'Chinese Shodan alternative — find vulnerable devices and services. Particularly useful for the Asian internet segment.'}},
  {name:'FOFA',url:'https://fofa.info',icon:'🌐',tags:['network','infra'],cat:'network',type:'Web API',desc:{ru:'Поиск по интернет-активам: устройства, веб-приложения, сертификаты.',en:'Internet asset search: devices, web apps, certificates.'}},
  {name:'SpiderFoot',url:'https://spiderfoot.net',icon:'🕷️',tags:['automation','recon'],cat:'network',type:'Web',desc:{ru:'Автоматизированный разведывательный фреймворк с 200+ модулями. Строит карту связей по IP, домену, email.',en:'Automated recon framework with 200+ modules. Builds relationship maps for IPs, domains, emails.'}},
  {name:'Recon-ng',url:'https://github.com/lanmaster53/recon-ng',icon:'🛰️',tags:['framework','recon'],cat:'network',type:'CLI',desc:{ru:'Модульный фреймворк для разведки в стиле Metasploit с маркетплейсом модулей и встроенной базой данных.',en:'Modular recon framework in Metasploit style with module marketplace and built-in database.'}},
  {name:'Nmap',url:'https://nmap.org',icon:'🗺️',tags:['ports','scan'],cat:'network',type:'CLI',desc:{ru:'Стандарт сетевого сканирования: порты, сервисы, ОС. Мощный движок скриптов NSE.',en:'Network scanning standard: ports, services, OS detection. Powerful NSE scripting engine.'}},
  {name:'Masscan',url:'https://github.com/robertdavidgraham/masscan',icon:'🚀',tags:['ports','fast'],cat:'network',type:'CLI',desc:{ru:'Сканирование всего интернета за 6 минут. Скорость до 10M пакетов/с.',en:'Scan the entire internet in 6 minutes. Up to 10M packets per second.'}},
  {name:'VirusTotal',url:'https://virustotal.com',icon:'🔴',tags:['malware','threat'],cat:'network',type:'Web API',desc:{ru:'Анализ файлов, URL, IP и доменов через 80+ антивирусных движков.',en:'Analyse files, URLs, IPs and domains with 80+ AV engines and threat intelligence feeds.'}},
  {name:'URLscan.io',url:'https://urlscan.io',icon:'🌍',tags:['url','web'],cat:'network',type:'Web',desc:{ru:'Сканирование и скриншот сайта без посещения. DOM, сертификаты, история запросов.',en:'Scan and screenshot a site without visiting. DOM, certificates, request history.'}},
  {name:'SecurityTrails',url:'https://securitytrails.com',icon:'🔍',tags:['dns','history'],cat:'network',type:'Web API',desc:{ru:'История DNS-записей, поддомены, связанные IP. Незаменим для нахождения реального IP за CDN.',en:'DNS history, subdomains, related IPs. Essential for finding real IPs behind CDNs.'}},
  {name:'Builtwith',url:'https://builtwith.com',icon:'🔬',tags:['tech','fingerprint'],cat:'network',type:'Web',desc:{ru:'Технологический стек сайта: CMS, фреймворки, аналитика.',en:'Website tech stack: CMS, frameworks, analytics.'}},
  {name:'Subfinder',url:'https://github.com/projectdiscovery/subfinder',icon:'🌐',tags:['subdomains','dns'],cat:'network',type:'CLI',desc:{ru:'Быстрый пассивный поиск поддоменов через 80+ источников. Написан на Go.',en:'Fast passive subdomain discovery through 80+ sources. Written in Go.'}},
  {name:'Amass',url:'https://github.com/owasp-amass/amass',icon:'🌊',tags:['subdomains','dns'],cat:'network',type:'CLI',desc:{ru:'Глубокая разведка поддоменов: пассивная и активная. Часть проекта OWASP.',en:'Deep subdomain reconnaissance: passive and active. Part of the OWASP project.'}},
  {name:'Hunter.io',url:'https://hunter.io',icon:'✉️',tags:['email','verify'],cat:'email',type:'Web',desc:{ru:'Поиск и верификация корпоративных email по домену. Показывает формат адресов.',en:'Find and verify corporate emails by domain. Shows address format and found contacts.'}},
  {name:'theHarvester',url:'https://github.com/laramies/theHarvester',icon:'🌾',tags:['email','dns'],cat:'email',type:'CLI',desc:{ru:'Сбор email, поддоменов, имён сотрудников из открытых источников: Google, Bing, LinkedIn, Shodan.',en:'Collect emails, subdomains, employee names from open sources: Google, Bing, LinkedIn, Shodan.'}},
  {name:'Holehe',url:'https://github.com/megadose/holehe',icon:'🦉',tags:['email','accounts'],cat:'email',type:'CLI',desc:{ru:'Проверяет на каких 120+ сервисах зарегистрирован email через форму восстановления пароля.',en:'Checks which of 120+ services an email is registered on via the password recovery form.'}},
  {name:'Have I Been Pwned',url:'https://haveibeenpwned.com',icon:'🔒',tags:['email','breach'],cat:'email',type:'Web',desc:{ru:'Проверка email на факт утечки в известных базах данных. Сотни утечек.',en:'Check if an email was exposed in known data breaches. Hundreds of breaches in the database.'}},
  {name:'Phonebook.cz',url:'https://phonebook.cz',icon:'📒',tags:['email','domain'],cat:'email',type:'Web',desc:{ru:'Поиск email, доменов и URL по ключевому слову. Использует данные из утечек.',en:'Search emails, domains and URLs by keyword. Uses breach data and public sources.'}},
  {name:'IntelligenceX',url:'https://intelx.io',icon:'🔍',tags:['email','breach'],cat:'email',type:'Web API',desc:{ru:'Поиск по утечкам, пастам, архивам. Уникальные данные недоступные обычным поисковикам.',en:'Search leaks, pastes, archives. Unique data unavailable to regular search engines.'}},
  {name:'Sherlock',url:'https://github.com/sherlock-project/sherlock',icon:'🔎',tags:['username','social'],cat:'social',type:'CLI',desc:{ru:'Поиск аккаунтов по никнейму на 400+ платформах одновременно.',en:'Search accounts by username on 400+ platforms simultaneously.'}},
  {name:'Maigret',url:'https://github.com/soxoj/maigret',icon:'🕵️',tags:['username','profiling'],cat:'social',type:'CLI',desc:{ru:'Расширенный поиск на 3000+ сайтах. Рекурсивно собирает данные профилей, строит граф связей.',en:'Advanced account search on 3000+ sites. Recursively collects profile data, builds connection graph.'}},
  {name:'Snoop',url:'https://github.com/snooppr/snoop',icon:'👃',tags:['username','cis'],cat:'social',type:'CLI',desc:{ru:'Поиск аккаунтов с акцентом на русскоязычные платформы. 3000+ сайтов включая ВКонтакте, Одноклассники.',en:'Account search focused on Russian-language platforms. 3000+ sites including VK, Odnoklassniki.'}},
  {name:'Twint',url:'https://github.com/twintproject/twint',icon:'🐦',tags:['twitter','scraping'],cat:'social',type:'CLI',desc:{ru:'Скрапер Twitter без API-ключа. Твиты, подписчики, геолокации по заданным фильтрам.',en:'Twitter scraper without API key. Tweets, followers, geolocations by filters.'}},
  {name:'Instaloader',url:'https://instaloader.github.io',icon:'📸',tags:['instagram','download'],cat:'social',type:'CLI',desc:{ru:'Скачивание постов, сторис, профилей Instagram. Сохраняет метаданные в JSON.',en:'Download Instagram posts, stories and profiles. Saves metadata in JSON.'}},
  {name:'Social Mapper',url:'https://github.com/Greenwolf/social_mapper',icon:'🗂️',tags:['face','mapping'],cat:'social',type:'CLI',desc:{ru:'Поиск профилей в соцсетях по фото и имени с распознаванием лиц.',en:'Search profiles on social networks by photo and name using face recognition.'}},
  {name:'Crosslinked',url:'https://github.com/m8sec/crosslinked',icon:'🔗',tags:['linkedin','employees'],cat:'social',type:'CLI',desc:{ru:'Автоматически собирает имена сотрудников через LinkedIn и генерирует корпоративные email.',en:'Automatically collects employee names via LinkedIn and generates corporate emails.'}},
  {name:'GHunt',url:'https://github.com/mxrch/GHunt',icon:'🔮',tags:['google','account'],cat:'social',type:'CLI',desc:{ru:'Извлекает информацию из Google-аккаунта по email: имя, фото, YouTube, Maps и другие сервисы.',en:'Extracts information from a Google account by email: name, photo, YouTube, Maps and other services.'}},
  {name:'GeoSpy',url:'https://geospy.ai',icon:'📍',tags:['geolocation','ai'],cat:'geo',type:'Web',desc:{ru:'Определение геолокации по фотографии через AI-анализ архитектуры, растительности и других признаков.',en:'AI-powered geolocation from photos via analysis of architecture, vegetation and other clues.'}},
  {name:'SunCalc',url:'https://suncalc.org',icon:'☀️',tags:['geo','shadow'],cat:'geo',type:'Web',desc:{ru:'Направление теней по солнцу — определение времени и места съёмки по тени на фотографии.',en:'Shadow direction from sun position — estimate time and shooting location from photo shadows.'}},
  {name:'Google Earth',url:'https://earth.google.com',icon:'🌍',tags:['geo','satellite'],cat:'geo',type:'Web',desc:{ru:'3D-вид Земли с историей спутниковых снимков. Виртуальный облёт предполагаемого района.',en:'3D Earth view with satellite imagery history. Virtual flyover of suspected locations.'}},
  {name:'Overpass Turbo',url:'https://overpass-turbo.eu',icon:'🗺️',tags:['geo','osm'],cat:'geo',type:'Web',desc:{ru:'Запросы к OpenStreetMap: найти объект по любым атрибутам. Мощный инструмент геолокации.',en:'Query OpenStreetMap: find any object by attributes. Powerful geolocation tool.'}},
  {name:'Yandex Maps',url:'https://maps.yandex.com',icon:'🗺️',tags:['geo','cis'],cat:'geo',type:'Web',desc:{ru:'Панорамы улиц и картография, особенно точная для СНГ.',en:'Street panoramas and maps, especially detailed for CIS region.'}},
  {name:'ExifTool',url:'https://exiftool.org',icon:'📷',tags:['metadata','exif'],cat:'image',type:'CLI',desc:{ru:'Чтение и редактирование метаданных файлов. Извлекает GPS, модель камеры, дату съёмки.',en:'Read and edit file metadata. Extracts GPS, camera model, capture date from photos.'}},
  {name:'FotoForensics',url:'https://fotoforensics.com',icon:'🔬',tags:['forensics','image'],cat:'image',type:'Web',desc:{ru:'Анализ изображений: ELA, метаданные, признаки редактирования. Определение подлинности.',en:'Image analysis: ELA, metadata, signs of editing. Helps determine photo authenticity.'}},
  {name:'TinEye',url:'https://tineye.com',icon:'👁️',tags:['reverse','image'],cat:'image',type:'Web',desc:{ru:'Обратный поиск изображений — находит источник и все места размещения фото в интернете.',en:'Reverse image search — finds the source and all placements of a photo on the internet.'}},
  {name:'Pimeyes',url:'https://pimeyes.com',icon:'😶',tags:['face','reverse'],cat:'image',type:'Web',desc:{ru:'Поиск лиц по фотографии в открытом интернете. Совпадения на сайтах и в соцсетях.',en:'Face search in the open internet. Finds matches on websites and social networks.'}},
  {name:'Metagoofil',url:'https://github.com/laramies/metagoofil',icon:'📄',tags:['metadata','docs'],cat:'image',type:'CLI',desc:{ru:'Извлечение метаданных из публичных документов через Google: имена пользователей, пути.',en:'Extract metadata from public documents found via Google: usernames, file paths.'}},
  {name:'Pipl',url:'https://pipl.com',icon:'🧑',tags:['people','search'],cat:'people',type:'Web API',desc:{ru:'Агрегатор персональных данных из тысяч источников. Поиск по имени, email, телефону.',en:'Personal data aggregator from thousands of sources. Search by name, email, phone.'}},
  {name:'OpenCorporates',url:'https://opencorporates.com',icon:'🏢',tags:['business','legal'],cat:'people',type:'Web',desc:{ru:'Крупнейшая открытая база данных компаний — 200M+ записей из реестров 140+ стран.',en:'Largest open database of companies — 200M+ records from registries in 140+ countries.'}},
  {name:'IntelTechniques',url:'https://inteltechniques.com',icon:'🧠',tags:['people','tools'],cat:'people',type:'Web',desc:{ru:'Сборник инструментов и поисковых форм для поиска по людям, телефонам, email.',en:'Collection of tools and search forms for people, phones, emails and social networks.'}},
  {name:'PhoneInfoga',url:'https://github.com/sundowndev/phoneinfoga',icon:'📱',tags:['phone','lookup'],cat:'people',type:'CLI',desc:{ru:'Специализированный инструмент для разведки по телефонным номерам. Определяет оператора, ищет в открытых источниках.',en:'Specialized tool for phone number intelligence. Identifies carrier, searches open sources.'}},
  {name:'Ignorant',url:'https://github.com/megadose/ignorant',icon:'📵',tags:['phone','accounts'],cat:'people',type:'CLI',desc:{ru:'Аналог Holehe для номеров телефонов. Проверяет на каких сервисах зарегистрирован номер.',en:'Holehe equivalent for phone numbers. Checks which services a phone number is registered on.'}},
  {name:'Wayback Machine',url:'https://web.archive.org',icon:'⏰',tags:['archive','web'],cat:'web',type:'Web',desc:{ru:'Архив веб-страниц с 1996 года. Миллиарды снимков — восстановление удалённого контента.',en:'Web archive since 1996. Billions of snapshots — essential for recovering deleted content.'}},
  {name:'WHOIS Lookup',url:'https://whois.domaintools.com',icon:'🏷️',tags:['whois','domain'],cat:'web',type:'Web',desc:{ru:'История и детали регистрации доменов. Обратный WHOIS по email находит все домены владельца.',en:'Domain registration history and details. Reverse WHOIS by email finds all owner domains.'}},
  {name:'DNSdumpster',url:'https://dnsdumpster.com',icon:'🔭',tags:['dns','recon'],cat:'web',type:'Web',desc:{ru:'DNS-рекогносцировка: карта хостов, MX, TXT, визуализация инфраструктуры домена.',en:'DNS recon: host map, MX, TXT, domain infrastructure visualization.'}},
  {name:'MXToolbox',url:'https://mxtoolbox.com',icon:'📧',tags:['dns','email'],cat:'web',type:'Web',desc:{ru:'Диагностика MX, DKIM, SPF, DMARC и DNS-записей. Анализ почтовой инфраструктуры.',en:'Diagnose MX, DKIM, SPF, DMARC and DNS records. Email infrastructure analysis.'}},
  {name:'crt.sh',url:'https://crt.sh',icon:'🔐',tags:['certificates','ct'],cat:'web',type:'Web',desc:{ru:'Публичный лог Certificate Transparency. Все SSL-сертификаты для домена включая поддомены.',en:'Certificate Transparency public log. All SSL certificates for a domain including subdomains.'}},
  {name:'Blockchain Explorer',url:'https://blockchain.com/explorer',icon:'₿',tags:['crypto','bitcoin'],cat:'crypto',type:'Web',desc:{ru:'Анализ Bitcoin-транзакций, адресов и блоков. Трейсинг потоков криптовалюты.',en:'Analyse Bitcoin transactions, addresses and blocks. Trace cryptocurrency flows.'}},
  {name:'Etherscan',url:'https://etherscan.io',icon:'Ξ',tags:['crypto','ethereum'],cat:'crypto',type:'Web',desc:{ru:'Эксплорер Ethereum: транзакции, контракты, токены. Полная история активности адресов.',en:'Ethereum explorer: transactions, contracts, tokens. Complete address activity history.'}},
  {name:'Breadcrumbs',url:'https://breadcrumbs.app',icon:'🍞',tags:['crypto','graph'],cat:'crypto',type:'Web',desc:{ru:'Визуализация и анализ крипто-транзакций для расследований. Граф движения средств.',en:'Visualise and trace crypto transactions for investigations. Fund movement graph.'}},
];

const CATS={network:{ru:'Сеть',en:'Network'},email:{ru:'Email',en:'Email'},social:{ru:'Соцсети',en:'Social'},geo:{ru:'Геолокация',en:'Geo'},image:{ru:'Изображения',en:'Images'},people:{ru:'Люди',en:'People'},web:{ru:'Веб/DNS',en:'Web/DNS'},crypto:{ru:'Крипто',en:'Crypto'}};

const infoTopics={
  ru:[
    {icon:'📧',title:'Разведка по email-адресу',sub:'Email → личность',badge:'МЕТОД',body:'<p>Начните с проверки через <strong>Hunter.io</strong> или <strong>Emailrep.io</strong>. Google email в кавычках — находит все публичные упоминания.</p><p><strong>Holehe</strong> проверяет форму "Забыл пароль" на 120+ сервисах без уведомления пользователя — узнаёте на каких платформах зарегистрирован человек.</p><p>Проверка в базах утечек обязательна. <strong>HaveIBeenPwned</strong> содержит данные из сотен утечек. По корпоративному домену находите коллег через <strong>theHarvester</strong> или <strong>Phonebook.cz</strong>.</p>'},
    {icon:'📱',title:'Разведка по номеру телефона',sub:'Телефон → данные',badge:'МЕТОД',body:'<p>Определите страну и оператора через <strong>PhoneInfoga</strong>. Введите номер в Google в разных форматах.</p><p>Мессенджеры: <strong>Telegram</strong>, <strong>WhatsApp</strong>, <strong>Viber</strong> — добавьте контакт и увидите профиль. <strong>GetContact</strong> и <strong>TrueCaller</strong> показывают как номер записан у других пользователей.</p><p><strong>Ignorant</strong> — аналог Holehe для телефонных номеров. Проверяет аккаунты через форму восстановления без SMS.</p>'},
    {icon:'🖼️',title:'Обратный поиск по фотографии',sub:'Фото → личность',badge:'МЕТОД',body:'<p>Используйте несколько поисковиков: <strong>Google Images</strong>, <strong>Yandex Images</strong> (лидер по лицам для СНГ), <strong>TinEye</strong> (история распространения).</p><p>Для идентификации по лицу: <strong>Pimeyes</strong> сканирует открытый интернет. EXIF-метаданные — проверьте первым через <strong>ExifTool</strong>. GPS-координаты дают точное место съёмки.</p><p>Если EXIF пуст — анализируйте надписи, архитектуру, растительность, транспорт. <strong>GeoSpy</strong> автоматизирует анализ.</p>'},
    {icon:'📍',title:'Геолокация по фото/видео',sub:'Медиа → место',badge:'МЕТОД',body:'<p>Первый шаг: проверьте EXIF через ExifTool. Современные смартфоны записывают GPS по умолчанию.</p><p>Текст на кириллице → постсоветское пространство. Местные бренды, дорожные знаки, архитектура, растительность — всё это зацепки.</p><p>Для верификации: <strong>Google Earth</strong>, <strong>Street View</strong>, <strong>Yandex Panoramas</strong>. <strong>SunCalc</strong> проверяет угол тени для подтверждения времени и места.</p>'},
    {icon:'🌐',title:'Разведка по домену',sub:'Домен → инфраструктура',badge:'МЕТОД',body:'<p>WHOIS-запрос: дата регистрации, серверы имён. Обратный WHOIS по email покажет все домены зарегистрированные на один адрес.</p><p>DNS-разведка через <strong>DNSdumpster</strong> или <strong>MXToolbox</strong>: TXT-записи раскрывают все SaaS-сервисы организации. <strong>SecurityTrails</strong> — исторические данные.</p><p>Поиск поддоменов: <strong>crt.sh</strong> (Certificate Transparency), <strong>Subfinder</strong>, <strong>Amass</strong>. Анализ стека: <strong>Builtwith</strong>, <strong>Wappalyzer</strong>.</p>'},
    {icon:'👤',title:'Разведка по никнейму',sub:'Username → профили',badge:'МЕТОД',body:'<p><strong>Sherlock</strong> — 400+ платформ за минуты. <strong>Maigret</strong> — 3000+ сайтов, граф связей. Для СНГ: <strong>Snoop</strong>.</p><p>GitHub — особенно ценен: реальное имя, рабочий email в коммитах, местоположение. Reddit: история постов создаёт детальный портрет интересов.</p><p>Поиск в утечках по нику через IntelX, DeHashed. Анализ вариаций: nick123, n1ck, nick_.</p>'},
    {icon:'🏢',title:'Разведка по организации',sub:'Компания → данные',badge:'МЕТОД',body:'<p><strong>OpenCorporates</strong> — реестры 140+ стран. Учредители, директор, история изменений.</p><p><strong>LinkedIn</strong> → сотрудники и должности. <strong>Crosslinked</strong> автоматически генерирует корпоративные email. <strong>theHarvester</strong> по домену собирает адреса из поисковиков.</p><p>DNS-разведка раскрывает инфраструктуру. <strong>Shodan</strong> по ASN — все публично доступные сервисы. GitHub-поиск находит случайно закоммиченные секреты.</p>'},
    {icon:'💎',title:'Анализ крипто-транзакций',sub:'Адрес → след',badge:'МЕТОД',body:'<p>Определите сеть: BTC → <strong>Blockchain.com</strong>, ETH → <strong>Etherscan</strong>. <strong>Breadcrumbs</strong> строит визуальный граф движения средств.</p><p>Анализ транзакций: входящие и исходящие, временные паттерны, суммы. Поиск адресов в утечках и форумах.</p><p>Несколько адресов могут принадлежать одному кошельку — кластерный анализ раскрывает это.</p>'},
    {icon:'🔒',title:'Работа с веб-архивами',sub:'Удалённый контент',badge:'МЕТОД',body:'<p><strong>Wayback Machine</strong> — снимки с 1996 года. CDX API для автоматизации поиска по архиву.</p><p>Google Cache и Yandex Cache — недавние версии страниц. <strong>CachedView</strong> агрегирует несколько кэшей.</p><p>Robots.txt и sitemap.xml в архиве раскрывают скрытую структуру сайта — намеренно скрытые страницы особенно интересны.</p>'},
  ],
  en:[
    {icon:'📧',title:'Email Address Intelligence',sub:'Email → identity',badge:'METHOD',body:'<p>Start with <strong>Hunter.io</strong> or <strong>Emailrep.io</strong>. Google the email in quotes — finds all public mentions.</p><p><strong>Holehe</strong> checks the "Forgot Password" form on 120+ services without notifying the user — reveals which platforms the person uses.</p><p>Breach checking is mandatory. <strong>HaveIBeenPwned</strong> covers hundreds of breaches. Find colleagues by domain via <strong>theHarvester</strong> or <strong>Phonebook.cz</strong>.</p>'},
    {icon:'📱',title:'Phone Number Intelligence',sub:'Phone → data',badge:'METHOD',body:'<p>Identify country and carrier via <strong>PhoneInfoga</strong>. Enter the number in Google in different formats.</p><p>Messengers: add as contact in <strong>Telegram</strong>, <strong>WhatsApp</strong>, <strong>Viber</strong> to see the profile. <strong>GetContact</strong> and <strong>TrueCaller</strong> show how others saved the number.</p><p><strong>Ignorant</strong> is the phone number equivalent of Holehe — checks accounts via recovery forms without sending SMS.</p>'},
    {icon:'🖼️',title:'Reverse Image Search',sub:'Photo → identity',badge:'METHOD',body:'<p>Use multiple engines: <strong>Google Images</strong>, <strong>Yandex Images</strong> (best for face recognition in CIS), <strong>TinEye</strong> (photo history).</p><p>For face identification: <strong>Pimeyes</strong> scans the open internet. Check EXIF first via <strong>ExifTool</strong> — GPS coordinates give exact shooting location.</p><p>If EXIF is empty — analyze text, architecture, vegetation, transport. <strong>GeoSpy</strong> automates the analysis.</p>'},
    {icon:'📍',title:'Photo/Video Geolocation',sub:'Media → location',badge:'METHOD',body:'<p>First: check EXIF via ExifTool. Modern smartphones record GPS by default.</p><p>Cyrillic text → post-Soviet space. Local brands, road signs, architecture, vegetation — all are clues.</p><p>For verification: <strong>Google Earth</strong>, <strong>Street View</strong>, <strong>Yandex Panoramas</strong>. <strong>SunCalc</strong> verifies shadow angle to confirm time and place.</p>'},
    {icon:'🌐',title:'Domain Intelligence',sub:'Domain → infrastructure',badge:'METHOD',body:'<p>WHOIS query: registration date, name servers. Reverse WHOIS by email shows all domains registered to one address.</p><p>DNS recon via <strong>DNSdumpster</strong> or <strong>MXToolbox</strong>: TXT records reveal all SaaS services used. <strong>SecurityTrails</strong> for historical data.</p><p>Subdomain discovery: <strong>crt.sh</strong>, <strong>Subfinder</strong>, <strong>Amass</strong>. Stack analysis: <strong>Builtwith</strong>, <strong>Wappalyzer</strong>.</p>'},
    {icon:'👤',title:'Username Reconnaissance',sub:'Username → profiles',badge:'METHOD',body:'<p><strong>Sherlock</strong> — 400+ platforms in minutes. <strong>Maigret</strong> — 3000+ sites, connection graph. For CIS: <strong>Snoop</strong>.</p><p>GitHub is especially valuable: real name, work email in commits, location. Reddit: post history creates a detailed interest profile.</p><p>Breach search by username via IntelX, DeHashed. Variation analysis: nick123, n1ck, nick_.</p>'},
    {icon:'🏢',title:'Organization Intelligence',sub:'Company → data',badge:'METHOD',body:'<p><strong>OpenCorporates</strong> — registries from 140+ countries. Founders, directors, history.</p><p><strong>LinkedIn</strong> → employees and titles. <strong>Crosslinked</strong> automatically generates corporate emails. <strong>theHarvester</strong> by domain collects addresses from search engines.</p><p>DNS recon reveals infrastructure. <strong>Shodan</strong> by ASN — all public services. GitHub search finds accidentally committed secrets.</p>'},
    {icon:'💎',title:'Cryptocurrency Transaction Analysis',sub:'Address → trail',badge:'METHOD',body:'<p>Identify network: BTC → <strong>Blockchain.com</strong>, ETH → <strong>Etherscan</strong>. <strong>Breadcrumbs</strong> builds a visual fund movement graph.</p><p>Transaction analysis: inbound/outbound, timing patterns, amounts. Search addresses in leaks and forums.</p><p>Multiple addresses may belong to one wallet — cluster analysis reveals this.</p>'},
    {icon:'🔒',title:'Working with Web Archives',sub:'Deleted content',badge:'METHOD',body:'<p><strong>Wayback Machine</strong> — snapshots since 1996. CDX API for automated archive search.</p><p>Google Cache and Yandex Cache — recent page versions. <strong>CachedView</strong> aggregates multiple caches.</p><p>Robots.txt and sitemap.xml in the archive reveal hidden site structure — deliberately hidden pages are especially interesting.</p>'},
  ]
};

const practiceData=[
  {icon:'🏰',name:'TryHackMe',url:'https://tryhackme.com',diff:'easy',tags:['CTF','guided'],desc:{ru:'Интерактивные комнаты с заданиями прямо в браузере. Идеально для старта.',en:'Interactive rooms with tasks right in the browser. Perfect for beginners.'}},
  {icon:'📦',name:'Hack The Box',url:'https://hackthebox.com',diff:'hard',tags:['CTF','real'],desc:{ru:'Реальные машины и задачи на разведку. Раздел OSINT challenges.',en:'Real machines and recon challenges. Dedicated OSINT challenges section.'}},
  {icon:'⏱️',name:'CTFtime',url:'https://ctftime.org',diff:'mid',tags:['competition','live'],desc:{ru:'Агрегатор CTF-соревнований со всего мира. Многие содержат треки по разведке.',en:'Aggregator of CTF competitions worldwide. Many contain recon tracks.'}},
  {icon:'🌍',name:'GeoGuessr',url:'https://www.geoguessr.com',diff:'easy',tags:['geo','visual'],desc:{ru:'Угадывание мест по Street View — тренирует геолокационный OSINT.',en:'Guess locations from Street View — trains geolocation OSINT skills.'}},
  {icon:'🔬',name:'Trace Labs',url:'https://www.tracelabs.org',diff:'hard',tags:['real world','CTF'],desc:{ru:'OSINT CTF с реальной целью — поиск пропавших без вести.',en:'OSINT CTF with a real-world mission — finding missing persons.'}},
  {icon:'📖',name:'OSINT.Training',url:'https://osint.training',diff:'mid',tags:['course','structured'],desc:{ru:'Курсы и тренировочные задания для аналитиков всех уровней.',en:'Courses and practice tasks for analysts of all levels.'}},
  {icon:'🏆',name:'PicoCTF',url:'https://picoctf.org',diff:'easy',tags:['CTF','beginner'],desc:{ru:'Бесплатный CTF от Carnegie Mellon. Форензика, криптография, веб.',en:'Free CTF from Carnegie Mellon. Forensics, crypto, web challenges.'}},
];

const challengeData=[
  {n:'01',diff:'easy',tags:'email • recon',name:{ru:'Найди email компании',en:'Find company emails'},desc:{ru:'Используй Hunter.io и theHarvester чтобы найти email-адреса сотрудников конкретной организации.',en:'Use Hunter.io and theHarvester to find employee email addresses of a specific organization.'}},
  {n:'02',diff:'mid',tags:'geo • image',name:{ru:'Определи геолокацию по фото',en:'Geolocate a photo'},desc:{ru:'По заданному изображению определи страну, город и улицу — EXIF и визуальные подсказки.',en:'Given an image, determine the country, city and street using EXIF data and visual clues.'}},
  {n:'03',diff:'hard',tags:'network • dns',name:{ru:'Раскрой инфраструктуру домена',en:'Map domain infrastructure'},desc:{ru:'Найди все поддомены, IP-адреса, открытые порты и технологии целевого домена.',en:'Find all subdomains, IP addresses, open ports and technologies of a target domain.'}},
];

const resourcesData=[
  {icon:'✈️',name:'OSINT Mindset',type:'Telegram',url:'https://t.me/osint_mindset',desc:{ru:'Актуальные инструменты, кейсы и методики от практикующих специалистов.',en:'Current tools, cases and methodologies from practicing specialists.'},badge:'Telegram'},
  {icon:'🔔',name:'Bellingcat',type:'Media',url:'https://www.bellingcat.com',desc:{ru:'Знаменитое следственное издание. Расследования и обучающие материалы.',en:'Famous investigative outlet. Investigations and educational materials.'},badge:'Web'},
  {icon:'⭐',name:'Awesome OSINT',type:'GitHub',url:'https://github.com/jivoi/awesome-osint',desc:{ru:'Огромный список OSINT-ресурсов, инструментов и методик на GitHub.',en:'Huge list of OSINT resources, tools and methodologies on GitHub.'},badge:'GitHub'},
  {icon:'🌐',name:'OSINT Framework',type:'Web',url:'https://osintframework.com',desc:{ru:'Интерактивная карта всех OSINT-инструментов по категориям.',en:'Interactive map of all OSINT tools organized by category.'},badge:'Web'},
  {icon:'🎥',name:'NahamSec',type:'YouTube',url:'https://www.youtube.com/@nahamsec',desc:{ru:'YouTube-канал багхантера. Видео по разведке и bug bounty.',en:'Bug hunter\'s YouTube channel. Tutorials on recon and bug bounty.'},badge:'YouTube'},
  {icon:'🎙️',name:'The OSINT Podcast',type:'Podcast',url:'https://inteltechniques.com/podcast.html',desc:{ru:'Подкаст Майкла Баззела. Техники, инструменты, реальные кейсы.',en:'Michael Bazzell\'s podcast. Techniques, tools, real-world cases.'},badge:'Podcast'},
  {icon:'📋',name:'OSINT Checklists',type:'GitHub',url:'https://github.com/sinwindie/OSINT',desc:{ru:'Чек-листы для расследований по людям, организациям, email, соцсетям.',en:'Checklists for investigations: people, organizations, email, social media.'},badge:'GitHub'},
  {icon:'📖',name:'HackTricks',type:'Web',url:'https://book.hacktricks.xyz',desc:{ru:'Энциклопедия хакерских техник и методологий.',en:'Encyclopedia of hacking techniques and methodologies.'},badge:'Web'},
  {icon:'💣',name:'PayloadsAllTheThings',type:'GitHub',url:'https://github.com/swisskyrepo/PayloadsAllTheThings',desc:{ru:'Самая полная коллекция полезных нагрузок и техник обхода защит.',en:'The most comprehensive collection of payloads and bypass techniques.'},badge:'GitHub'},
  {icon:'🟠',name:'r/OSINT',type:'Community',url:'https://reddit.com/r/OSINT',desc:{ru:'Сообщество Reddit для OSINT-энтузиастов.',en:'Reddit community for OSINT enthusiasts. Tools, cases, news.'},badge:'Reddit'},
  {icon:'🕵️',name:'Trace Labs',type:'Community',url:'https://www.tracelabs.org',desc:{ru:'НКО использующая OSINT для поиска пропавших без вести.',en:'NGO using OSINT to find missing persons. CTF with real-world targets.'},badge:'NGO'},
  {icon:'🧩',name:'OSINT Stuff Collection',type:'GitHub',url:'https://github.com/cipher387/osint_stuff_tool_collection',desc:{ru:'Масштабная коллекция инструментов от Cipher387. Обновляется регулярно.',en:'Massive tool collection by Cipher387. Regularly updated.'},badge:'GitHub'},
  {icon:'💬',name:'digitalmole79',type:'Telegram',url:'https://t.me/digitalmole79',desc:{ru:'Разборы инструментов, кейсов и дискуссии по информационной безопасности.',en:'Tool breakdowns, cases and security discussions.'},badge:'Telegram'},
];

/* STATE */
let lang=localStorage.getItem('osint_lang')||null;
let activeFilter='all',searchVal='';

/* I18N */
const i18n={
  ru:{navTools:'Инструменты',navInfo:'База знаний',navPractice:'Практика',navResources:'Ресурсы',toolsEye:'Коллекция',toolsTitle:'Инструменты',toolsSub:'Подборка инструментов для разведки, анализа данных, пентеста и форензики.',infoEye:'База знаний',infoTitle:'База знаний',infoSub:'Подробные руководства по методам разведки.',pracEye:'Тренировка',pracTitle:'Практика',pracSub:'Платформы и задания для отработки навыков разведки.',resEye:'Библиотека',resTitle:'Ресурсы',resSub:'Каналы, книги, подкасты и сообщества.',chalEye:'Задания',chalTitle:'Быстрые задания',catAll:'Все',btnOpen:'Открыть',searchPh:'Поиск инструмента...',lvlBeg:'Начальный',lvlMid:'Средний',lvlAdv:'Продвинутый',lvlE:'Лёгкое',lvlM:'Среднее',lvlH:'Сложное',settTitle:'⚙️ Настройки',settLang:'Язык',settTheme:'Тема',suppTitle:'💎 Поддержка',suppSub:'Если проект оказался полезным — можно поддержать авторов криптовалютой в сети TON:',suppOr:'— или —',suppCheck:'Скриншот перевода: <a class="support-check-link" href="https://t.me/Selectis_Weronka" target="_blank">@Selectis_Weronka</a> ❤️',wCopy:'нажми чтобы скопировать',wCopied:'✓ скопировано',madeBy:'Сообщество:',suppBtn:'Поддержка',settBtn:'Настройки',empty:'Ничего не найдено по'},
  en:{navTools:'Tools',navInfo:'Knowledge Base',navPractice:'Practice',navResources:'Resources',toolsEye:'Collection',toolsTitle:'Tools',toolsSub:'A curated collection of tools for intelligence, data analysis, pentesting and forensics.',infoEye:'Knowledge',infoTitle:'Knowledge Base',infoSub:'Detailed guides on intelligence methods.',pracEye:'Training',pracTitle:'Practice',pracSub:'Platforms and tasks for practicing intelligence skills.',resEye:'Library',resTitle:'Resources',resSub:'Channels, books, podcasts and communities.',chalEye:'Challenges',chalTitle:'Quick Challenges',catAll:'All',btnOpen:'Open',searchPh:'Search tools...',lvlBeg:'Beginner',lvlMid:'Intermediate',lvlAdv:'Advanced',lvlE:'Easy',lvlM:'Medium',lvlH:'Hard',settTitle:'⚙️ Settings',settLang:'Language',settTheme:'Theme',suppTitle:'💎 Support',suppSub:'If the project was useful — you can support the authors with crypto on the TON network:',suppOr:'— or —',suppCheck:'Send receipt screenshots to: <a class="support-check-link" href="https://t.me/Selectis_Weronka" target="_blank">@Selectis_Weronka</a> ❤️',wCopy:'click to copy',wCopied:'✓ copied',madeBy:'Community:',suppBtn:'Support',settBtn:'Settings',empty:'Nothing found for'},
};
function T(k){return(i18n[lang]||i18n.ru)[k]||k;}

/* LANG / THEME */
function setLang(l,fromSettings=false){
  lang=l;localStorage.setItem('osint_lang',l);
  document.getElementById('langScreen').classList.add('hidden');
  applyLang();if(fromSettings){document.getElementById('btnLangRu').classList.toggle('active',l==='ru');document.getElementById('btnLangEn').classList.toggle('active',l==='en');closeSettings();}
  renderAll();
}
function applyLang(){
  const tr=i18n[lang]||i18n.ru;
  const ids={navTools:'nav-tools','nav-info':null,navInfo:'nav-info',navPractice:'nav-practice',navResources:'nav-resources',toolsEye:'toolsEye',toolsTitle:'toolsTitle',toolsSub:'toolsSub',infoEye:'infoEye',infoTitle:'infoTitle',infoSub:'infoSub',pracEye:'pracEye',pracTitle:'pracTitle',pracSub:'pracSub',resEye:'resEye',resTitle:'resTitle',resSub:'resSub',chalEye:'chalEye',chalTitle:'chalTitle'};
  Object.entries({navTools:'nav-tools',navInfo:'nav-info',navPractice:'nav-practice',navResources:'nav-resources',toolsEye:'toolsEye',toolsTitle:'toolsTitle',toolsSub:'toolsSub',infoEye:'infoEye',infoTitle:'infoTitle',infoSub:'infoSub',pracEye:'pracEye',pracTitle:'pracTitle',pracSub:'pracSub',resEye:'resEye',resTitle:'resTitle',resSub:'resSub',chalEye:'chalEye',chalTitle:'chalTitle'}).forEach(([k,id])=>{const el=document.getElementById(id);if(el)el.textContent=tr[k];});
  document.getElementById('searchInput').placeholder=tr.searchPh;
  document.getElementById('settTitle').textContent=tr.settTitle;
  document.getElementById('settLangLabel').textContent=tr.settLang;
  document.getElementById('settThemeLabel').textContent=tr.settTheme;
  document.getElementById('suppTitle').textContent=tr.suppTitle;
  document.getElementById('suppSub').textContent=tr.suppSub;
  document.getElementById('suppOr').textContent=tr.suppOr;
  document.getElementById('suppCheck').innerHTML=tr.suppCheck;
  document.getElementById('walletCopyHint').textContent=tr.wCopy;
  document.getElementById('madeBy').textContent=tr.madeBy;
  document.getElementById('suppBtnLabel').textContent=tr.suppBtn;
  document.getElementById('settBtnLabel').textContent=tr.settBtn;
  document.getElementById('tmOpenLabel').textContent=tr.btnOpen;
}
function setTheme(t){document.documentElement.setAttribute('data-theme',t);localStorage.setItem('osint_theme',t);document.getElementById('btnDark').classList.toggle('active',t==='dark');document.getElementById('btnLight').classList.toggle('active',t==='light');}

/* TOOLS */
function renderTools(){
  const grid=document.getElementById('toolsGrid');
  const q=searchVal;
  const filtered=tools.filter(tool=>{
    const mc=activeFilter==='all'||tool.cat===activeFilter;
    const mq=!q||tool.name.toLowerCase().includes(q)||tool.tags.some(tg=>tg.includes(q))||(tool.desc[lang]||tool.desc.ru).toLowerCase().includes(q);
    return mc&&mq;
  });
  const n=filtered.length;
  document.getElementById('toolsCount').textContent=tools.length;
  document.getElementById('countLabel').textContent=lang==='ru'?`${n} ${n===1?'инструмент':n<5?'инструмента':'инструментов'}`:`${n} tool${n===1?'':'s'}`;
  if(!filtered.length){grid.innerHTML=`<div class="empty-state">${T('empty')} «<em>${q}</em>»</div>`;return;}
  grid.innerHTML='';
  filtered.forEach((tool,i)=>{
    const card=document.createElement('div');card.className='tool-card';card.style.animationDelay=`${i*.04}s`;
    let host='';try{host=new URL(tool.url).hostname.replace('www.','')}catch{host=tool.url}
    const desc=tool.desc[lang]||tool.desc.ru;
    card.innerHTML=`<div class="card-top"><div class="card-icon">${tool.icon}</div><a class="card-link-btn" href="${tool.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>${host}</a></div><div class="card-name">${tool.name}</div><div class="card-tags">${tool.tags.map(tg=>`<span class="tag">${tg}</span>`).join('')}</div><div class="card-desc">${desc}</div><div class="card-foot"><span class="type-badge">${tool.type}</span></div>`;
    card.addEventListener('click',()=>openToolModal(tool));grid.appendChild(card);
  });
}
function renderPills(){
  const c=document.getElementById('pillsContainer');c.innerHTML='';
  const allB=document.createElement('button');allB.className='pill'+(activeFilter==='all'?' active':'');allB.textContent=T('catAll');
  allB.onclick=()=>{activeFilter='all';renderPills();renderTools();};c.appendChild(allB);
  Object.entries(CATS).forEach(([key,labels])=>{
    const btn=document.createElement('button');btn.className='pill'+(activeFilter===key?' active':'');btn.textContent=labels[lang]||labels.ru;
    btn.onclick=()=>{activeFilter=key;renderPills();renderTools();};c.appendChild(btn);
  });
}
function openToolModal(tool){
  const desc=tool.desc[lang]||tool.desc.ru;
  document.getElementById('tmTitle').textContent=tool.name;
  document.getElementById('tmUrl').textContent=tool.url;
  document.getElementById('tmLink').href=tool.url;
  document.getElementById('tmTags').innerHTML=tool.tags.map(tg=>`<span class="tag">${tg}</span>`).join('');
  document.getElementById('tmDesc').textContent=desc;
  document.getElementById('toolModalOverlay').classList.add('open');
}

/* INFO */
function renderInfo(){
  const list=document.getElementById('infoList');list.innerHTML='';
  const topics=infoTopics[lang]||infoTopics.ru;
  topics.forEach((topic,i)=>{
    const card=document.createElement('div');card.className='info-card';card.style.animationDelay=`${i*.05}s`;
    card.innerHTML=`<div class="info-card-top"><div class="info-icon">${topic.icon}</div><div class="info-meta"><div class="info-title">${topic.title}</div><div class="info-sub">${topic.sub}</div></div><span class="info-badge">${topic.badge}</span><svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="info-body">${topic.body}</div>`;
    card.addEventListener('click',()=>{const open=card.classList.contains('open');document.querySelectorAll('.info-card.open').forEach(c=>c.classList.remove('open'));if(!open)card.classList.add('open');});
    list.appendChild(card);
  });
}

/* PRACTICE */
function renderPractice(){
  const grid=document.getElementById('practiceGrid');
  grid.innerHTML=practiceData.map(p=>{
    const desc=p.desc[lang]||p.desc.ru;
    const lvlC=p.diff==='easy'?'lvl-e':p.diff==='mid'?'lvl-m':'lvl-h';
    const lvlT=p.diff==='easy'?T('lvlBeg'):p.diff==='mid'?T('lvlMid'):T('lvlAdv');
    return `<a class="pcard" href="${p.url}" target="_blank" rel="noopener"><div class="pcard-icon">${p.icon}</div><div class="pcard-name">${p.name}</div><div class="pcard-desc">${desc}</div><div class="pcard-tags">${p.tags.map(tg=>`<span class="tag">${tg}</span>`).join('')}</div><span class="lvl ${lvlC}">● ${lvlT}</span></a>`;
  }).join('');
  const cl=document.getElementById('chalList');
  cl.innerHTML=challengeData.map(c=>{
    const nm=c.name[lang]||c.name.ru;const ds=c.desc[lang]||c.desc.ru;
    const lvlC=c.diff==='easy'?'lvl-e':c.diff==='mid'?'lvl-m':'lvl-h';
    const lvlT=c.diff==='easy'?T('lvlE'):c.diff==='mid'?T('lvlM'):T('lvlH');
    return `<div class="chal-card" data-num="${c.n}"><div class="chal-name">${nm}</div><div class="chal-desc">${ds}</div><div class="chal-foot"><span class="lvl ${lvlC}">● ${lvlT}</span><span class="tag">${c.tags}</span></div></div>`;
  }).join('');
}

/* RESOURCES */
function renderResources(){
  document.getElementById('resGrid').innerHTML=resourcesData.map(r=>{
    const desc=r.desc[lang]||r.desc.ru;
    return `<a class="rcard" href="${r.url}" target="_blank" rel="noopener"><div class="rcard-top"><div class="rcard-icon">${r.icon}</div><div><div class="rcard-name">${r.name}</div><div class="rcard-type">${r.type}</div></div></div><div class="rcard-desc">${desc}</div><span class="rcard-badge">${r.badge}</span></a>`;
  }).join('');
}

/* TABS */
document.querySelectorAll('.nav-tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    tab.classList.add('active');document.getElementById('tab-'+tab.dataset.tab).classList.add('active');
  });
});

/* MODALS */
document.getElementById('toolModalOverlay').addEventListener('click',e=>{if(e.target===e.currentTarget)e.target.classList.remove('open');});
document.getElementById('tmClose').addEventListener('click',()=>document.getElementById('toolModalOverlay').classList.remove('open'));
function openSettings(){document.getElementById('settingsOverlay').classList.add('open');const t=document.documentElement.getAttribute('data-theme');document.getElementById('btnDark').classList.toggle('active',t==='dark');document.getElementById('btnLight').classList.toggle('active',t==='light');document.getElementById('btnLangRu').classList.toggle('active',lang==='ru');document.getElementById('btnLangEn').classList.toggle('active',lang==='en');}
function closeSettings(){document.getElementById('settingsOverlay').classList.remove('open');}
function openSupport(){document.getElementById('supportOverlay').classList.add('open');}
function closeSupport(){document.getElementById('supportOverlay').classList.remove('open');}
document.getElementById('settingsOverlay').addEventListener('click',e=>{if(e.target===e.currentTarget)closeSettings();});
document.getElementById('supportOverlay').addEventListener('click',e=>{if(e.target===e.currentTarget)closeSupport();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.getElementById('toolModalOverlay').classList.remove('open');closeSettings();closeSupport();}});

function copyWallet(el,addr){
  navigator.clipboard.writeText(addr).then(()=>{
    const h=document.getElementById('walletCopyHint');const prev=h.textContent;
    h.textContent=T('wCopied');el.style.borderColor='var(--accent)';
    setTimeout(()=>{h.textContent=prev;el.style.borderColor='';},2000);
  });
}

/* SEARCH */
document.getElementById('searchInput').addEventListener('input',e=>{searchVal=e.target.value.toLowerCase().trim();renderTools();});

/* RENDER ALL */
function renderAll(){applyLang();renderPills();renderTools();renderInfo();renderPractice();renderResources();}

/* INIT */
(function(){
  const savedTheme=localStorage.getItem('osint_theme')||'dark';
  document.documentElement.setAttribute('data-theme',savedTheme);
  if(lang){document.getElementById('langScreen').classList.add('hidden');renderAll();}
})();
