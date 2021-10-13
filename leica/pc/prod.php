

<?
$series = $_GET['series'];
$prodData = ['m10' => [
                'title' => 'Leica M10',
                'info' => 'Closer to the decisive moment',
                'price' => '10,700,000',
                'heading' => 'DISCOVER MORE IN BLACK & WHITE',
                'subj' => 'THE LEICA M10 MONOCHROM WITH 40MP',
                'sub_title' => 'Why LEICA M-SYSTEM?',
                'sub_info' => 'When you take a photograph with a Leica M-System camera,<br />you experience a different kind of photography.',
                'tag' => 'A UNIQUE APPROACH TO PHOTOGRAPHY',
                'src' => 'https://player.vimeo.com/video/368004670?title=0&byline=0&portrait=0'
                ],
              's' => [
                  'title' => 'Leica S3',
                  'info' => 'A Class of Its Own',
                  'price' => '13,500,000',
                  'heading' => 'LEICA PROFORMAT MEDIUM FORMAT – REDEFINED',
                  'subj' => 'FAST MOBILITY BUILT TO LAST',
                  'sub_title' => 'Why LEICA S-SYSTEM?',
                  'sub_info' => 'The Leica S-System was conceived from the ground up as a purely digital camera system and was built with the precise needs of professional photographers in mind.',
                  'tag' => 'A UNIQUE APPROACH TO PHOTOGRAPHY',
                  'src' => 'https://player.vimeo.com/video/395411918?title=0&byline=0&portrait=0'
              ], 
              'sl' => [
                'title' => 'Leica SL2',
                'info' => 'Fast, Intuitive mirrorless camera',
                'price' => '8,450,000',
                'heading' => 'PHOTOGRAPHY IS ABOUT CHOICES.',
                'subj' => 'PHOTOGRAPHY IS ABOUT CHOICES.THE QUALITY OF THE SL2 IS UNPARALLELED.',
                'sub_title' => 'Why LEICA SL-SYSTEM?',
                'sub_info' => 'The quality of the SL2 is unparalleled. I’ve always depended on the best of equipment, and in my view, it doesn’t get any better than this.',
                'tag' => 'A UNIQUE APPROACH TO PHOTOGRAPHY',
                'src' => 'https://player.vimeo.com/video/368004670?title=0&byline=0&portrait=0'
              ],
              'q' => [
                'title' => 'Leica Q',
                'info' => 'Immaculate Perfection',
                'price' => '7,230,000',
                'heading' => 'ACCEPT NOTHING BUT PERFECTION',
                'subj' => 'AN ARTFUL STATEMENT OF UNDERSTATEMENT',
                'sub_title' => 'Why LEICA Q?',
                'sub_info' => 'The Leica Q has well-established itself as a full-frame compact camera for all occasions and types of photography.',
                'tag' => 'A UNIQUE APPROACH TO PHOTOGRAPHY',
                'src' => 'https://player.vimeo.com/video/321248116?title=0&byline=0&portrait=0'
              ],
              'vlux' => [
                'title' => 'Leica V-LUX5',
                'info' => 'THE SUPERZOOM FOR EXPLORERS',
                'price' => '1,740,000',
                'heading' => 'THE SUPERZOOM CAMERA FOR EXPLORERS',
                'subj' => 'HIGH-END COMPACT CAMERA',
                'sub_title' => 'Why LEICA V-LUX?',
                'sub_info' => 'The extensive range of its zoom lens covers nearly all distances and subject matter – simplifying your travels by avoiding the need for changing lenses and packing additional equipment.',
                'tag' => 'A UNIQUE APPROACH TO PHOTOGRAPHY',
                'src' => 'https://player.vimeo.com/video/301598044?title=0&byline=0&portrait=0'
            ]
        ];
?>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover">
<meta name="title" content="LEICA CAM">
<meta name="description" content="Emotional CAMERA"0>
<meta property="og:title" content="LEICA CAM">
<meta property="og:url" content="http://ppaxe.kr/pc">
<meta property="og:description" content="Emotional CAMERA">
<meta name="format-detection" content="telephone=no">
<title>LEICA :: EMOTIONAL CAMERA</title>
<meta name="apple-mobile-web-app-title" content="LEICA CAM">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
<!-- default css -->
<link rel="stylesheet" href="contents/css/contents.css">
<!-- common -->
<link rel="stylesheet" href="contents/css/common.css">
<script type="text/javascript" src="contents/js/common.js"></script>
<!-- // common -->
<!-- plugins -->
<script type="text/javascript" src="contents/js/plugins.js"></script>
<link rel="stylesheet" href="contents/css/plugins.css">
<!-- plugins -->
</head>
<body>
    <? include "contents/include/skipNav.html" ?>
    <div id="container">
        <div id="contents">
            <!-- header -->
            <? include "contents/include/header.html" ?>
            <!-- //header -->
            
            <section class="product" id="section">
                <h2 class="toc">메인 컨텐츠</h2>
                <!-- aside -->
                <aside class="prod_view">
                    <h3 class="toc">제품 보기</h3>
                    <div class="swiper prodSwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img src="contents/images/product/prod_<? echo $series ?>_view1.png" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img src="contents/images/product/prod_<? echo $series ?>_view2.png" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img src="contents/images/product/prod_<? echo $series ?>_view3.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div thumbsSlider="" class="swiper viewSwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <button role="button" title="제품 정면 사진 보기">
                                    <img src="contents/images/product/prod_<? echo $series ?>_view1.png" alt="">
                                </button>
                            </div>
                            <div class="swiper-slide">
                                <button role="button" title="제품 측면 사진 보기">
                                    <img src="contents/images/product/prod_<? echo $series ?>_view2.png" alt="">
                                </button>
                            </div>
                            <div class="swiper-slide">
                                <button role="button" title="제품 후면 사진 보기">
                                    <img src="contents/images/product/prod_<? echo $series ?>_view3.png" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="prod_view_info">
                        <h4 class="c_w ta_c mb_0"><? echo $prodData[$series]['title'] ?></h4>
                        <p class="price c_pr fs_24 ta_c fw_b mt_40">W <? echo $prodData[$series]['price'] ?></p>
                    </div>
                    <div class="btn_el">
                        <div class="">
                            <a href="#" role="button" title="구매하기" class="button block ta_c">BUY NOW</a>
                        </div>
                    </div>
                </aside>
                <!-- aside -->
                <!-- content -->
                <div class="prod_info">
                    <article class="main" style="background: url(contents/images/product/prod_<? echo $series ?>_pic1.jpg) center center no-repeat">
                        <div class="innerS b_n tl_xy p_a">
                            <h3 class="fs_36 c_w"><? echo $prodData[$series]['heading'] ?></h3>
                            <p class="fs_24 c_w fw_b"><? echo $prodData[$series]['subj'] ?></p>
                        </div>
                    </article>
                    <div class="sub_title">
                        <div class="innerS b_n">
                            <h3 class="c_w fs_36"><? echo $prodData[$series]['sub_title'] ?></h3>
                            <p class="c_pw fs_24 fw_b"><? echo $prodData[$series]['sub_info'] ?></p>
                        </div>
                    </div>
                    <article class="d_b">
                        <div class="innerS b_n ta_c mt_120">
                            <h3 class="fs_36 c_w">FREE VIEW</h3>
                            <iframe src="<? echo $prodData[$series]['src'] ?>" width="800" height="450" allow="autoplay; fullscreen" allowfullscreen title="제품 소개 영상"></iframe>
                        </div>
                        <div class="innerS b_n mt_50 ta_c">
                            <h3 class="fs_36 c_w"><? echo $prodData[$series]['tag'] ?></h3>
                            <img src="contents/images/product/prod_<? echo $series ?>_pic2.png" alt="제품 이미지 상세">
                        </div>
                    </article>
                    <? include "contents/include/footer.html" ?>
                </div>
                <!-- content -->
            </section>
        </div>
    </div>
</body>
<script type="text/javascript">
    const getPhp = '<? echo $series ?>',
          viewSwiper = new Swiper(".viewSwiper", {
        spaceBetween: 20,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesProgress: true,
      }),
        prodSwiper = new Swiper(".prodSwiper", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: viewSwiper,
        },
    });

</script>
</html>