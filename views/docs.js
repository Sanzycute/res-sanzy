<!DOCTYPE html>
<html lang="en">

<head>
    <!-- icon animated -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.0.8/font-awesome-animation.min.css"/>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Sanzy Api</title>
    <link href="lolhuman/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="lolhuman/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="lolhuman/css/default.css" rel="stylesheet">
    <link href="lolhuman/css/style.css" rel="stylesheet">
</head>

<body id="page-top" class="dark-mode">
    <div id="wrapper">
        <!-- Sidebar -->
        <ul class="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <i class="fa fa-smile-beam fa-2x"></i>
                <div class="sidebar-brand-text mx-3">Sanzy APIs</div>
            </a>
            <hr class="sidebar-divider my-0">
            <li class="nav-item active">
                <a class="nav-link" href="/">
                    <i class="fas fa-fw fa-thermometer-three-quarters"></i>
                    <span>Statistic</span></a>
            </li>
            <hr class="sidebar-divider">
            <div class="sidebar-heading">
                Features
            </div>
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseDownload" aria-expanded="true" aria-controls="collapseBootstrap">
                    <i class="fa fa-fw fa-arrow-down"></i>
                    <span>Downloader & Media</span>
                </a>
                <div id="collapseDownload" class="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
                    <div class="py-2 collapse-inner rounded">
                         <h6 class="collapse-header">Downloader</h6>
                         <a class="collapse-item" target="_blank" href="/api/download/fb?url=https://www.facebook.com/TeguhSuwandi19/videos/5230538373729232/?mibextid=XBoEBUlHZ1eoDabU&apikey=<%= apikey %>" target="_blank" >facebook</a>
                         <a class="collapse-item" target="_blank" href="/api/download/instagram?url=https://www.instagram.com/p/Cm0qSwwyy1A/?igshid=YmMyMTA2M2Y=&apikey=<%= apikey %>" target="_blank" >instagram</a>
                         <a class="collapse-item" target="_blank" href="/api/download/allvideo?url=https://www.youtube.com/watch?v=9JS47BC0WXc&apikey=<%= apikey %>" target="_blank" >all video</a>
                         <a class="collapse-item" target="_blank" href="/api/download/mediafire?url=https://www.mediafire.com/file/ijfew65o8vzj4px/intro+kayess+2.zip/fi&apikey=<%= apikey %>" target="_blank" >mediafire</a>
                         <a class="collapse-item" target="_blank" href="/api/download/happymod?query=whatsapp&apikey=<%= apikey %>" target="_blank" >happymod</a>
                         <a class="collapse-item" target="_blank" href="/api/download/pinterest?query=cecan&apikey=<%= apikey %>" target="_blank" >pinterest</a>
                         <a class="collapse-item" target="_blank" href="/api/download/soundcloud?url=https://soundcloud.com/kurniawan-ardi-kusuma-effendy/128a?utm_source=mobi&utm_campaign=social_sharing&apikey=<%= apikey %>" target="_blank" >sound cloud</a>   
                         <a class="collapse-item" target="_blank" href="/api/download/tiktokview?url=https://vt.tiktok.com/ZS8L2sC1N/&apikey=<%= apikey %>" target="_blank" >tiktokview</a>               
			             <a class="collapse-item" target="_blank" href="/api/download/ytmp4?url=https://www.youtube.com/watch?v=9JS47BC0WXc&apikey=<%= apikey %>" target="_blank" >ytmp3</a>
			             <a class="collapse-item" target="_blank" href="/api/download/ytmp3?url=https://www.youtube.com/watch?v=9JS47BC0WXc&apikey=<%= apikey %>" target="_blank" >ytmp4</a>
			             <a class="collapse-item" target="_blank" href="/api/download/tiktok?url=https://vt.tiktok.com/ZS8L2sC1N/&apikey=<%= apikey %>" target="_blank" >tiktok</a>               
			             <a class="collapse-item" target="_blank" href="/api/download/playmp3?query=alone&apikey=<%= apikey %>" target="_blank" >play mp3</a>
			             <a class="collapse-item" target="_blank" href="/api/download/ytsearch?query=alone&apikey=<%= apikey %>" target="_blank" >youtube search</a>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTextPro" aria-expanded="true" aria-controls="collapseForm">
                    <i class="fa fa-fw fa-font"></i>
                    <span>Text maker</span>
                </a>
                <div id="collapseTextPro" class="collapse" aria-labelledby="headingForm" data-parent="#accordionSidebar">
                    <div class="py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Image maker</h6>
                        <a class="collapse-item" href="/api/textpro/candy?text=teks&apikey=<%= apikey %>" target="_blank" >candy</a>
                        <a class="collapse-item" href="/api/textpro/christmas?text=teks&apikey=<%= apikey %>" target="_blank" >christmas</a>
                        <a class="collapse-item" href="/api/textpro/3dchristmas?text=teks&apikey=<%= apikey %>" target="_blank" >3dchristmas</a>
                        <a class="collapse-item" href="/api/textpro/sparklechristmas?text=teks&apikey=<%= apikey %>" target="_blank" >sparklechristmas</a>
                        <a class="collapse-item" href="/api/textpro/deepsea?text=teks&apikey=<%= apikey %>" target="_blank" >deepsea</a>         
                        <a class="collapse-item" href="/api/textpro/scifi?text=teks&apikey=<%= apikey %>" target="_blank" >scifi</a>
                        <a class="collapse-item" href="/api/textpro/rainbow?text=teks&apikey=<%= apikey %>" target="_blank" >rainbow</a>
                        <a class="collapse-item" href="/api/textpro/waterpipe?text=teks&apikey=<%= apikey %>" target="_blank" >christmas</a>
                        <a class="collapse-item" href="/api/textpro/spooky?text=teks&apikey=<%= apikey %>" target="_blank" >spooky</a>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGame" aria-expanded="true" aria-controls="collapseTable">
                    <i class="fas fa-laptop"></i>
                    <span>Game</span>
                </a>
                <div id="collapseGame" class="collapse" aria-labelledby="headingTable" data-parent="#accordionSidebar">
                    <div class="py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Game API</h6>
                        <a class="collapse-item" target="_blank" href="/api/kuis/caklontong?apikey=<%= apikey %>" target="_blank" >Cak Lontong</a>
                  </div>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseIslamic" aria-expanded="true" aria-controls="collapseTable">
                    <i class="fas fa-star-and-crescent"></i>
                    <span>Islamic</span>
                </a>
                <div id="collapseIslamic" class="collapse" aria-labelledby="headingTable" data-parent="#accordionSidebar">
                    <div class="py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Islamic Api</h6>
                        <a class="collapse-item" target="_blank" href="/api/quotes?apikey=<%= apikey %>" target="_blank" >Quotes</a>
                      </div>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseSimi" aria-expanded="true" aria-controls="collapseTable">
                    <i class="fas fa-image"></i>
                    <span>Photooxy</span>
                </a>
                <div id="collapseSimi" class="collapse" aria-labelledby="headingTable" data-parent="#accordionSidebar">
                    <div class="py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Photooxy</h6>
                      <a class="collapse-item" href="/api/photooxy/shadow?text=teks&apikey=<%= apikey %>" target="_blank" >>shadow</a>
                      <a class="collapse-item" href="/api/photooxy/message-under-grass?text=teks&apikey=<%= apikey %>" target="_blank" >>message-under-grass</a>
                      <a class="collapse-item" href="/api/photooxy/double-heart?text=teks&apikey=<%= apikey %>" target="_blank" >>double-heart</a>
                        <a class="collapse-item" href="/api/photooxy/butterfly?text=teks&apikey=<%= apikey %>" target="_blank" >>butterfly</a>
                  </div>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseprimbon" aria-expanded="true" aria-controls="collapseTable">
                    <i class="fas fa-star"></i>
                    <span>primbon</span>
                </a>
                <div id="collapseprimbon" class="collapse" aria-labelledby="headingTable" data-parent="#accordionSidebar">
                    <div class="py-2 collapse-inner rounded">
                        <h6 class="collapse-header">primbon Api</h6>
                        <a class="collapse-item" target="_blank" href="/api/fakta?apikey=<%= apikey %>" target="_blank" >Fakta</a>
                  </div>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseRandomimage" aria-expanded="true" aria-controls="collapseForm">
                    <i class="fa fa-fw fa-image"></i>
                    <span>Random image</span>
                </a>
                <div id="collapseRandomimage" class="collapse" aria-labelledby="headingForm" data-parent="#accordionSidebar">
                    <div class="py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Random image</h6>
                        <a class="collapse-item" target="_blank" href="/api/random/couple&apikey=<%= apikey %>">PP Couple </a>
                    </div>
                </div>
                </li>
            
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseNsfw" aria-expanded="true" aria-controls="collapseForm">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span>Nsfw</span>
                </a>
                <div id="collapseNsfw" class="collapse" aria-labelledby="headingForm" data-parent="#accordionSidebar">
                    <div class="py-2 collapse-inner rounded">
            <h6 class="collapse-header">NSFW Features</h6>
            <a class="collapse-item" target="_blank" href="/api/anime/waifu?apikey=<%= apikey %>" target="_blank" >Waifu</a>
          </div>
        </div>
      </li>
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseImage" aria-expanded="true" aria-controls="collapseTable">
                    <i class="fa fa-fw fa-image"></i>
                    <span>Creator Canvas</span>
                </a>
                <div id="collapseImage" class="collapse" aria-labelledby="headingTable" data-parent="#accordionSidebar">
                    <div class="py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Canvas Welcome</h6>
                        <a class="collapse-item" target="_blank" href="/api/canvas/welcome?name=Sanzy&gcname=Sanzy&20Bot&20Official&pp=https://i.ibb.co/r4ZwgKB/Team-Dev-20230209-180051.jpg&bg=https://telegra.ph/file/6ab4daac226292a112540.jpg&membercount=25&gcicon=https://i.ibb.co/r4ZwgKB/Team-Dev-20230209-180051.jpg&apikey=<%= apikey %>" target="_blank" >> Canvas Welcome</a>
                      <a class="collapse-item" target="_blank" href="/api/canvas/welcome2?name=Sanzy&gcname=Sanzy&20Bot&20Official&pp=https://i.ibb.co/r4ZwgKB/Team-Dev-20230209-180051.jpg&bg=https://telegra.ph/file/6ab4daac226292a112540.jpg&membercount=25&apikey=<%= apikey %>" target="_blank" >> Canvas Welcome 2</a>
                      <a class="collapse-item" target="_blank" href="/api/canvas/goodbye4?name=Sanzy&20Bot&gcname=Sanzy&20Bot&20Official&pp=https://i.ibb.co/r4ZwgKB/Team-Dev-20230209-180051.jpg&bg=https://t-2.tstatic.net/lampung/foto/bank/images/arti-mimpi-berjalan-di-hutan-pertanda-diri-sedang-cemas.jpg&apikey=<%= apikey %>" target="_blank" >> Canvas Leave</a>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseSticker" aria-expanded="true" aria-controls="collapseTable">
                    <i class="fas fa-smile"></i>
                    <span>Sticker & Canvas</span>
                </a>
                <div id="collapseSticker" class="collapse" aria-labelledby="headingTable" data-parent="#accordionSidebar">
                    <div class="py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Sticker</h6>
                        <a class="collapse-item" target="_blank" href="/api/maker/ttp?text=Sanzy&apikey=<%= apikey %>" target="_blank" >>TTP maker</a>
                        <a class="collapse-item" href="/api/maker/attp?text=Sanzy&apikey=<%= apikey %>" target="_blank" >>ATTP maker</a>
                      <a class="collapse-item" href="/api/maker/sertitolol?text=teks&apikey=<%= apikey %>" target="_blank" >>sertitolol</a>
                  </div>
                </div>
            </li>
            <hr class="sidebar-divider">
            <div class="sidebar-heading">
                Contact
            </div>
            <li class="nav-item">
                <a class="nav-link" href="https://wa.me/6281276698054">
                    <i class="fab fa-fw fa-whatsapp"></i>
                    <span>Whatsapp</span>
                </a>
            </li>
            <hr class="sidebar-divider">
        </ul>
        <!-- Sidebar -->
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <!-- TopBar -->
                <nav class="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top">
            <button id="sidebarToggleTop" class="btn btn-link rounded-circle mr-3">
              <i class="fa fa-bars"></i>
            </button>
            <ul class="navbar-nav ml-auto">
              <div class="topbar-divider d-none d-sm-block"></div>
              <li class="nav-item dropdown no-arrow">
              </a>
              <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown">
              </div>
            </li>
            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bell fa-fw"></i>
                <span class="badge badge-success badge-counter">2 </span>
              </a>
                 <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header bg-info-gradient">
                  INFO CENTER
                </h6>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-danger">
                      <i class="fas fa-info-circle text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">May 05, 2021</div>
                    <span style="font-size:12px;">Delete Apikey: SanzyBot</span>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-danger">
                      <i class="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">November 19, 2020</div>
                    <span style="font-size:14px;">Kelahiran Rest Api</span>
                  </div>
                </a>
              </div>
            </li>
            </ul>
  </nav>
                <!-- Sidebar -->

                    <!-- Container Fluid-->
                    <div class="container-fluid" id="container-wrapper">
                        <div class="card h-50 mb-4">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col mr-2">
                    <h3 style="margin-bottom: 0;"><i class="fas fa-ruler text-danger"></i>README</h3>
    
                    <div class="card-body mb-3">
                        <ol>
                            <li>Mohon untuk tidak spam APIKeys</li>
                            <li>Jika APIkeys invalid hubungi saya</li>
                            <li>Semua fitur yang ada di sini free dan unlimited request</li>
                            <li>Rest API sewaktu waktu akan maintenance</li>
                            <li>udah itu aja</li>
                        </ol>
                    </div>
                                    </div>
                                    <div class="col-auto">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                        <!-- Earnings (Annual) Card Example -->
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card h-50">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-uppercase mb-1">Visitor (Unique)</div>
                                            <div class="h5 mb-0 font-weight-bold">8372</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fa fa-user faa-ring animated fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Pending Requests Card Example -->
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card h-50">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-uppercase mb-1">Requests</div>
                                            <div class="h5 mb-0 font-weight-bold">8372</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar faa-wrench animated fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Row-->
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            Someone want to donate me?
                            <p>
                                <a href="https://saweria.co/raraharsita2" class="btn btn-primary btn-sm mr-2" target="_blank"><i class="fa fa-fw fa-wallet"></i>&nbsp;Saweria</a>
                                <a href="https://saweria.co/raraharsita2" class="btn btn-primary btn-sm ml-2" target="_blank"><i class="fab fa-fw fa-paypal"></i>&nbsp;Paypal</a>
                            </p>
                        </div>
                    </div>
                </div>
                <!---Container Fluid-->
            </div>
            <!-- Footer -->
            <footer class="sticky-footer">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        Made with <i class="fa fa-heart faa-flash animated"></i> by
                        <a href="https://github.com/Hiisanzyy" target="_blank" style="color: #fff;">Sanzy</a>
                        </span>
                    </div>
                </div>
            </footer>
            <!-- Footer -->
        </div>
    </div>

    <!-- Scroll to top -->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <script src="lolhuman/vendor/jquery/jquery.min.js"></script>
    <script src="lolhuman/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="lolhuman/vendor/jquery-easing/jquery.easing.min.js"></script>
    <script src="lolhuman/js/ruang-admin.min.js"></script>
</body>

</html>