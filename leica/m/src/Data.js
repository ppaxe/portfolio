
const products = [
    {
    id : 0,
    name : 'm10',
    title : 'Leica M10',
    info : 'Closer to the decisive moment',
    price : 10700000,
    heading : 'DISCOVER MORE IN BLACK & WHITE',
    subj : 'THE LEICA M10 MONOCHROM WITH 40MP',
    sub_title : 'Why LEICA M-SYSTEM?',
    sub_info : 'When you take a photograph with a Leica M-System camera,you experience a different kind of photography.',
    tag : 'A UNIQUE APPROACH TO PHOTOGRAPHY',
    src : 'https://player.vimeo.com/video/368004670?title=0&byline=0&portrait=0'
    },
    {
      id : 1,
      name : 's3',
      title : 'Leica S3',
      info : 'A Class of Its Own',
      price : 13500000,
      heading : 'LEICA PROFORMAT MEDIUM FORMAT – REDEFINED',
      subj : 'FAST MOBILITY BUILT TO LAST',
      sub_title : 'Why LEICA S-SYSTEM?',
      sub_info : 'The Leica S-System was conceived from the ground up as a purely digital camera system and was built with the precise needs of professional photographers in mind.',
      tag : 'A UNIQUE APPROACH TO PHOTOGRAPHY',
      src : 'https://player.vimeo.com/video/395411918?title=0&byline=0&portrait=0'
  }, 
  {
    id : 2,
    name : 'sl2',
    title : 'Leica SL2',
    info : 'Fast, Intuitive mirrorless camera',
    price : 8450000,
    heading : 'PHOTOGRAPHY IS ABOUT CHOICES.',
    subj : 'PHOTOGRAPHY IS ABOUT CHOICES.THE QUALITY OF THE SL2 IS UNPARALLELED.',
    sub_title : 'Why LEICA SL-SYSTEM?',
    sub_info : 'The quality of the SL2 is unparalleled.\nI’ve always depended on the best of equipment, and in my view, it doesn’t get any better than this.',
    tag : 'A UNIQUE APPROACH TO PHOTOGRAPHY',
    src : 'https://player.vimeo.com/video/368004670?title=0&byline=0&portrait=0'
  },
  {
    id : 3,
    name : 'q',
    title : 'Leica Q',
    info : 'Immaculate Perfection',
    price : 7230000,
    heading : 'ACCEPT NOTHING BUT PERFECTION',
    subj : 'AN ARTFUL STATEMENT OF UNDERSTATEMENT',
    sub_title : 'Why LEICA Q?',
    sub_info : 'The Leica Q has well-established itself as a full-frame compact camera for all occasions and types of photography.',
    tag : 'A UNIQUE APPROACH TO PHOTOGRAPHY',
    src : 'https://player.vimeo.com/video/321248116?title=0&byline=0&portrait=0'
  },
  {
    id : 4,
    name : 'vlux5',
    title : 'Leica V-LUX5',
    info : 'THE SUPERZOOM FOR EXPLORERS',
    price : 1740000,
    heading : 'THE SUPERZOOM CAMERA FOR EXPLORERS',
    subj : 'HIGH-END COMPACT CAMERA',
    sub_title : 'Why LEICA V-LUX?',
    sub_info : 'The extensive range of its zoom lens covers nearly all distances and subject matter – simplifying your travels by avoiding the need for changing lenses and packing additional equipment.',
    tag : 'A UNIQUE APPROACH TO PHOTOGRAPHY',
    src : 'https://player.vimeo.com/video/301598044?title=0&byline=0&portrait=0'
  }
]

const academys = [
    {
      id : 0,
      name : `PHIL PENMAN Pro.`,
      title : 'A Pictorial Secret',
      profile : {
          image : 'perman',
          schedule : `AUGUST 7-9`,
          place : `Seoul`,
          tools : `Leica S3`
      },
    },
    {
      id : 1,
      name : `Emily Pro.`,
      title : 'Express colors not seen in real life',
      profile : {
          image : 'emily',
          schedule : `OCTOBER 17-24`,
          place : `Gyeonggi`,
          tools : `Leica SL2`
      },
    },
    {
      id : 2,
      name : `MARK MANN Pro.`,
      title : `Capture the moment of one's journey`,
      profile : {
          image : 'mann',
          schedule : `JANUARY 22-24`,
          place : `Busan`,
          tools : `Leica V-LUX`
      },
    },
    {
      id : 3,
      name : `Crystal Pro.`,
      title : `Deeper black and white`,
      profile : {
          image : 'crystal',
          schedule : `OCTOBER 22-28`,
          place : `Seoul`,
          tools : `Leica M10 Monochrome`
      },
    },
    {
      id : 4,
      name : `MARK DE PAOLA Pro.`,
      title : `Blue, the beauty of color`,
      profile : {
          image : 'paola',
          schedule : `AUGUST 9-11`,
          place : `Busan`,
          tools : `Leica Q`
      },
    },
]

const stores = [
    {
        id : 0,
        name : 'CHEONGDAM',
        tel : '070-7510-7822',
        hour : '10:30 - 20:00',
        parking : 'Two hours free parking',
        info : 'The Leica Store Cheongdam provides access to the full line of current Leica products, from the legendary M-System to the groundbreaking SL-System, to a select range of innovative sport optics products.\nProfessionals, enthusiasts and hobbyists alike are welcome to experience German engineering at its best through hands-on demos, expert advice from our knowledgeable staff, and special programming through the Leica Akademie.\nLeica Store and Gallery Cheongdam serves as a venue to explore the world of Leica photography and ignite your passion for creating perfect pictures.',
        location : 'Leica Store Cheongdam, 420, Dosan-daero, Gangnam-gu',
        map : { 'x' : '37.523312', 'y' : '127.041975' }
    },
    {
        id : 1,
        name : 'GANGNAM',
        tel : '02-3479-1134',
        hour : '11:00 - 21:00',
        parking : 'Three hours free parking',
        info : 'The Leica Store Cheongdam provides access to the full line of current Leica products, from the legendary M-System to the groundbreaking SL-System, to a select range of innovative sport optics products.Professionals, enthusiasts and hobbyists alike are welcome to experience German engineering at its best through hands-on demos, expert advice from our knowledgeable staff, and special programming through the Leica Akademie.\nLeica Store and Gallery Cheongdam serves as a venue to explore the world of Leica photography and ignite your passion for creating perfect pictures.',
        location : 'Leica Store Gangnam, 176, Sinbanpo-ro, Seocho-gu',
        map : { 'x' : '37.503820', 'y' : '127.004606' }
    },
    {
        id : 2,
        name : 'CHUNGMURO',
        tel : '02-2274-8003',
        hour : '09:30 - 19:00',
        parking : 'One hours free parking',
        info : 'The Leica Store Cheongdam provides access to the full line of current Leica products, from the legendary M-System to the groundbreaking SL-System, to a select range of innovative sport optics products.\nProfessionals, enthusiasts and hobbyists alike are welcome to experience German engineering at its best through hands-on demos, expert advice from our knowledgeable staff, and special programming through the Leica Akademie.\n Leica Store and Gallery Cheongdam serves as a venue to explore the world of Leica photography and ignite your passion for creating perfect pictures.',
        location : 'Leica Store Chungmuro, 16, Samil-daero 4-gil, Jung-gu',
        map : { 'x' : '37.562106', 'y' : '126.990016' }
    },
    {
        id : 3,
        name : 'BUSAN',
        tel : '1800-5600',
        hour : '09:00 - 20:00',
        parking : 'Four hours free parking',
        info : 'The Leica Store Cheongdam provides access to the full line of current Leica products, from the legendary M-System to the groundbreaking SL-System, to a select range of innovative sport optics products.Professionals, enthusiasts and hobbyists alike are welcome to experience German engineering at its best through hands-on demos, expert advice from our knowledgeable staff, and special programming through the Leica Akademie.Leica Store and Gallery Cheongdam serves as a venue to explore the world of Leica photography and ignite your passion for creating perfect pictures.',
        location : 'Leica Store Busan, 299, Haeundaehaebyeon-ro, Haeundae-gu',
        map : { 'x' : '35.161413', 'y' : '129.163550' }
    }
]


const supports = [
  {
    question : 'LEICA HUNTING DEALERS',
    answer : 'This is where hunters will find an extensive range of Leica Sport Optics products.\nThe product portfolio includes binoculars, rangefinders, spotting scopes and riflescopes.\nLeica hunting dealers also stock an extensive range of technical equipment and accessories for your hunting needs.\n Professional staff with in-depth knowledge of the range on offer are always on hand to help you, provide detailed information and offer assistance in finding the product to meet your specific needs.'
  },
  {
    question : 'WHAT MEANS HD?',
    answer : 'High Definition means highest quality, both in terms of optics and mechanical measures.\nIt features special fluoride glass materials and includes AquaDura® coating.\nUltravid HD focusing remains fully functional, even in extreme temperatures – with unerringly smooth action.'
  },
  {
    question : 'WHAT IS THE EXIT PUPIL?',
    answer : 'The bright, circular field that can be seen by looking through the eyepiece from a distance of around 30 cm is called exit pupil.\nIt is calculated by dividing the front lens diameter by the magnification.\nA sign of quality: the circular field should always be perfectly round with sharp edges.'
  },
  {
    question : 'WHAT MEANS ER i?',
    answer : 'ER stands for extended eye relief.\n‘i’ is for ‘illuminated’, designating illumination suitable for twilight use.'
  },
  {
    question : 'WHAT MEANS EHR?',
    answer : 'EHR stands for Equivalent Horizontal Range, a helpful parameter for shots in mountainous terrain.\nA special Leica algorithm always takes at least one ballistic trajectory into account when calculating the EHR, providing results far more accurate than the ‘rifleman’s rule’.'
  },
  {
    question : 'WHAT IS THE EXIT PUPIL?',
    answer : 'The bright, circular field that can be seen by looking through the eyepiece from a distance of around 30 cm is called exit pupil.\nIt is calculated by dividing the front lens diameter by the magnification.\nA sign of quality: the circular field should always be perfectly round with sharp edges.'
  },
  {
    question : 'WHAT IS THE AUTOMATIC POWER-OFF FUNCTION?',
    answer : 'Via acceleration and position sensors, this intelligent technology switches off the illuminated dot when the rifle is not in shooting position.\nIt also extends battery life considerably.'
  },
  {
    question : 'WHAT MEANS ASPH. ?',
    answer : 'This abbreviation means that an aspherical lens is used in the optical system.\nLight rays passing through the edges of the aspherical lens are refracted differently – this results in perfect edge-to-edge sharpness across the entire field of view.'
  },
  {
    question : 'WHAT IS THE AQUADURA® COATING?',
    answer : 'Its water and dirt repellent properties guarantee a clear view – even in unfavourable weather conditions. \nAquaDura® improves viewing comfort and the increased abrasion resistance protects the precious optical elements even more effectively against damage.'
  },
  {
    question : 'WHAT MEANS HLS®?',
    answer : 'HLS® ist the HighLux-System, used in Duovid and Ultravid binoculars.\nIt can significantly increase transmission, contrast and sharpness.\nIt is a system of mechanical measures for the reduction of stray light (for example baffles, anti-reflective paints) in combination with special reflective coating of prisms.'
  },
]



const siteMaps = [{

    'Product' : [{'LEICA M' : '/product/0'}, {'LEICA S' : '/product/1'}, {'LEICA SL' : '/product/2'}, {'LEICA Q' : '/product/3'}, {'LEICA V-LUX' : '/product/4'}]

},
{

    'Academy' : [{'Academy' : '/academy'}]

},
{

    'Our Story' : [{'Our Story' : '/wwa'}]

},
{

    'Find Store' : [{'Cheongdam' : '/store/0'}, {'Gangnam' : '/store/1'}, {'Chungmuro' : '/store/2'}, {'Busan' : '/store/3'}]

},
{

    'Support' : [{'Support' : '/support'}]

},
]

export { products, academys, stores, supports, siteMaps };