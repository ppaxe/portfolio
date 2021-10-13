<!-- 

<?
$location = $_GET['loc'];
$locArr = [
    'cheongdam' => [
        'name' => 'CHEONGDAM',
        'tel' => '070-7510-7822',
        'hour' => '10:30 - 20:00',
        'parking' => 'Two hours free parking',
        'info' => 'The Leica Store Cheongdam provides access to the full line of current Leica products, from the legendary M-System to the groundbreaking SL-System, to a select range of innovative sport optics products.<br /><br /> Professionals, enthusiasts and hobbyists alike are welcome to experience German engineering at its best through hands-on demos, expert advice from our knowledgeable staff, and special programming through the Leica Akademie.<br /><br /> Leica Store and Gallery Cheongdam serves as a venue to explore the world of Leica photography and ignite your passion for creating perfect pictures.',
        'location' => 'Leica Store Cheongdam, 420, Dosan-daero, Gangnam-gu',
        'map' => [ 'x' => '37.523312', 'y' => '127.041975']
    ],
    'gangnam' => [
        'name' => 'GANGNAM',
        'tel' => '02-3479-1134',
        'hour' => '11:00 - 21:00',
        'parking' => 'Three hours free parking',
        'info' => 'The Leica Store Cheongdam provides access to the full line of current Leica products, from the legendary M-System to the groundbreaking SL-System, to a select range of innovative sport optics products.<br /><br />Professionals, enthusiasts and hobbyists alike are welcome to experience German engineering at its best through hands-on demos, expert advice from our knowledgeable staff, and special programming through the Leica Akademie.<br /><br />Leica Store and Gallery Cheongdam serves as a venue to explore the world of Leica photography and ignite your passion for creating perfect pictures.',
        'location' => 'Leica Store Gangnam, 176, Sinbanpo-ro, Seocho-gu',
        'map' => [ 'x' => '37.503820', 'y' => '127.004606']
    ],
    'chungmuro' => [
        'name' => 'CHUNGMURO',
        'tel' => '02-2274-8003',
        'hour' => '09:30 - 19:00',
        'parking' => 'One hours free parking',
        'info' => 'The Leica Store Cheongdam provides access to the full line of current Leica products, from the legendary M-System to the groundbreaking SL-System, to a select range of innovative sport optics products.<br /><br />Professionals, enthusiasts and hobbyists alike are welcome to experience German engineering at its best through hands-on demos, expert advice from our knowledgeable staff, and special programming through the Leica Akademie.<br /><br />Leica Store and Gallery Cheongdam serves as a venue to explore the world of Leica photography and ignite your passion for creating perfect pictures.',
        'location' => 'Leica Store Chungmuro, 16, Samil-daero 4-gil, Jung-gu',
        'map' => [ 'x' => '37.562106', 'y' => '126.990016']
    ],
    'busan' => [
        'name' => 'BUSAN',
        'tel' => '1800-5600',
        'hour' => '09:00 - 20:00',
        'parking' => 'Four hours free parking',
        'info' => 'The Leica Store Cheongdam provides access to the full line of current Leica products, from the legendary M-System to the groundbreaking SL-System, to a select range of innovative sport optics products.<br /><br />Professionals, enthusiasts and hobbyists alike are welcome to experience German engineering at its best through hands-on demos, expert advice from our knowledgeable staff, and special programming through the Leica Akademie.<br /><br />Leica Store and Gallery Cheongdam serves as a venue to explore the world of Leica photography and ignite your passion for creating perfect pictures.',
        'location' => 'Leica Store Busan, 299, Haeundaehaebyeon-ro, Haeundae-gu',
        'map' => [ 'x' => '35.161413', 'y' => '129.163550']
    ]

]
?> -->
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
</head>
<body>
    <? include "contents/include/skipNav.html" ?>
    <div id="container">
        <div id="contents">
            <!-- header -->
            <? include "contents/include/header.html" ?>
            <!-- //header -->
            <section class="store" id="section" style="background: url(contents/images/contents/store_<? echo $location ?>_img.jpg) center center no-repeat; background-size:cover; background-attachment: fixed;">
                <h2 class="toc">메인 컨텐츠</h2>
                <!-- content -->
                <article>
                    <h3 class="store_title"><? echo $locArr[$location]['name'] ?> STORE</h3>
                    <div class="store_info">
                        <ul>
                            <li>
                                <dl>
                                    <dt>TEL</dt>
                                    <dd><? echo $locArr[$location]['tel'] ?></dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>OPENING HOURS</dt>
                                    <dd><? echo $locArr[$location]['hour'] ?></dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>PARKING</dt>
                                    <dd><? echo $locArr[$location]['parking'] ?></dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                    <p class="store_info_text c_pw fs_18 ta_l">
                        <? echo $locArr[$location]['info'] ?>
                    </p>
                    <div id="map" class="store_map">
                        <!-- kakao map -->
                    </div>
                    <p class="c_w fs_24 fw_b ta_c">
                        <? echo $locArr[$location]['location'] ?>
                    </p>
                </article>
                <!-- // content -->
            </section>
            <? include "contents/include/footer.html" ?>
        </div>
    </div>
</body>
<script type="text/javascript" src="API KEY"></script>
<script type="text/javascript">

// kakao map
const placeX = <? echo $locArr[$location]['map']['x'] ?>,
      placeY = <? echo $locArr[$location]['map']['y'] ?>;
    
var mapContainer = document.getElementById('map'),
    mapOption = { 
        center: new kakao.maps.LatLng(placeX, placeY), 
        level: 4 
    };

var map = new kakao.maps.Map(mapContainer, mapOption); 

var imageSrc = 'contents/images/icon/gps.png',
    imageSize = new kakao.maps.Size(70, 70),
    imageOption = {offset: new kakao.maps.Point(35, 70)};
      
      
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(placeX, placeY);


var marker = new kakao.maps.Marker({
    position: markerPosition, 
    image: markerImage  
});


marker.setMap(map);   
    
</script>
</html>