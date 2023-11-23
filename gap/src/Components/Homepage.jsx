import React from 'react'
import './Homepage.css'
import Header from './Header'
import vid from '../Images/vid.webm'
import Footer from './Footer'



const Homepage = () => {
    return (
        <div>
            <Header />
            <div id='home_screen'>
                <div id='home_nav'>
                    <div id='home_nav_main'>
                        <div id='nav_left'>
                            <img src='https://www.gap.com/Asset_Archive/GPWeb/content/0030/015/725/assets/logo/logo_gap--light.svg' />
                        </div>
                        <div id='nav_mid'>
                            <ul id='mid_list'>
                                <li id='list'>NEW</li>
                                <li id='list'>WOMEN</li>
                                <li id='list'>MEN</li>
                                <li id='list'>GIRLS</li>
                                <li id='list'>BOYS</li>
                                <li id='list'>TOODLER</li>
                                <li id='list'>BABY</li>
                                <li id='list'>MATERNITY</li>
                                <li id='list'>SALE</li>
                                <li id='list'>THE GIFT SHOP</li>
                            </ul>
                        </div>
                        <div id='nav_right'>
                            <input id='search' placeholder='Search'></input>
                            <i id='s_icon' class="fa-solid fa-magnifying-glass " style={{ color: "#fff" }}></i>
                        </div>

                    </div>

                </div>
                <div id='home_header'>
                    <video id='video' controls autoPlay>
                        <source src={vid} type="video/webm" />


                    </video>
                    <div id='options' >
                        <ul id='mid_list2'>

                            <li id='list2'>WOMEN</li>
                            <li id='list2'>MATERNITY</li>
                            <li id='list2'>MEN</li>
                            <li id='list2'>GIRLS</li>
                            <li id='list2'>BOYS</li>
                            <li id='list2'>TOODLER GIRL</li>
                            <li id='list2'>TOODLER BOY</li>
                            <li id='list2'>BABY GIRL</li>
                            <li id='list2'>BABY BOY</li>

                        </ul>
                    </div>


                </div>
                <div id='image_1'>
                    <div id='i_header'>
                        <h1>60% Off Really Big Deals</h1>
                        <div id='i_subheader'>
                            <p>For wrapping & keeping.</p>
                            <p>Online only. <span>DETAILS.</span></p>
                        </div>
                    </div>
                    <div id='i1_images'>
                        <div id='i1_image1'>
                            <img src='https://gapprod.a.bigcontent.io/v1/static/20231120_BF_Sweats_Hover_DESK' alt='' />
                            <div id='i_details'>
                                <div id='i_details_text'>
                                    <h1>Sweaters from $22</h1>
                                    <p>Kids' & Baby from $15</p>
                                </div>

                                <div id='i_details_buton'>
                                    <button>Shop Now +</button>
                                </div>

                            </div>
                        </div>


                        <div id='i1_image2'>
                            <img src='https://gapprod.a.bigcontent.io/v1/static/20231120_BF_Sweaters_Hover_DESK' alt='' />
                            <div id='i_details'>
                                <div id='i_details_text'>
                                    <h1>Sweaters from $22</h1>
                                    <p>Kids' & Baby from $15</p>
                                </div>

                                <div id='i_details_buton'>
                                    <button>Shop Now +</button>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div id='image_2'>
                    {/* <div id='i_header'>
                        <h1>60% Off Really Big Deals</h1>
                        <div id='i_subheader'>
                            <p>For wrapping & keeping.</p>
                            <p>Online only. <span>DETAILS.</span></p>
                        </div>
                    </div> */}
                    <div id='i2_images'>
                        <div id='i2_image1'>
                            <img src='https://gapprod.a.bigcontent.io/v1/static/20231120_BF_Sweats_Hover_DESK' alt='' />
                            <div id='i_details'>
                                <div id='i_details_text'>
                                    <h1>Sweaters from $22</h1>
                                    <p>Kids' & Baby from $15</p>
                                </div>

                                <div id='i_details_buton'>
                                    <button>Shop Now +</button>
                                </div>

                            </div>
                        </div>


                        <div id='i2_image2'>
                            <img src='https://gapprod.a.bigcontent.io/v1/static/20231120_BF_Sweaters_Hover_DESK' alt='' />
                            <div id='i_details'>
                                <div id='i_details_text'>
                                    <h1>Sweaters from $22</h1>
                                    <p>Kids' & Baby from $15</p>
                                </div>

                                <div id='i_details_buton'>
                                    <button>Shop Now +</button>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div id='image_3'>
                    <div id='i3_main'>
                        <div id='i3_header'>
                            <h2>Black Friday Deals You'll Love</h2>
                        </div>
                        <div id='i3_images'>
                            <div id='left'>
                                <img src='https://gapprod.a.bigcontent.io/v1/static/CertonaArrow_White' alt='' />
                            </div>
                            <div id='i3_images_main'>
                                <div id='i3'>
                                <img src='https://www.gap.com/webcontent/0054/005/932/cn54005932.jpg' alt='' />
                                <p>
                                Vintage Soft Cargo Sweatpants
                                </p>
                                </div>
                                <div id='i3'>
                                      <img src='https://www.gap.com/webcontent/0053/979/116/cn53979116.jpg' alt='' />
                                      <p>Mid Rise Cloud Light Flare Sweatpants</p>
                                </div>
                                <div id='i3'>
                                <img src='https://www.gap.com/webcontent/0053/515/714/cn53515714.jpg' alt='' />
                                <p>High Rise Boyfriend Joggers</p>
                                </div>
                                <div id='i3'>
                                <img src='https://www.gap.com/webcontent/0054/006/018/cn54006018.jpg' alt='' />
                                <p>Vintage Soft Raglan Sweatshirt</p>
                                </div>
                                <div id='i3'>
                                <img src='https://www.gap.com/webcontent/0052/199/478/cn52199478.jpg' alt='' />
                                <p>High Rise Cheeky Straight Jeans</p>
                                </div>
                            </div>

                            <div id='left'>
                                <img style={{ transform: "rotate(180deg)" }} src='https://gapprod.a.bigcontent.io/v1/static/CertonaArrow_White' alt='' />
                            </div>
                        </div>

                    </div>

                </div>
                <div id='image_4'>
                    <div id='i4_main'>
                        <h2 id='i4_header'>
                        Shop by Division
                        </h2>
                        <div id='i4_images_main'>
                            <div id='i4'>
                            <img src='https://gapprod.a.bigcontent.io/v1/static/HOL235662_Women_DESK' alt='' />
                                <p>Women +</p>
                            </div>
                            <div id='i4'>
                            <img src='https://gapprod.a.bigcontent.io/v1/static/HOL235662_Men_DESK' alt='' />
                                <p>men +</p>
                            </div>
                            <div id='i4'>
                            <img src='https://gapprod.a.bigcontent.io/v1/static/HOL235662_Girls_DESK' alt='' />
                                <p>girls +</p>
                            </div>
                            <div id='i4'>
                            <img src='https://gapprod.a.bigcontent.io/v1/static/HOL235662_Boys_DESK' alt='' />
                                <p>boys +</p>
                            </div>
                            <div id='i4'>
                            <img src='https://gapprod.a.bigcontent.io/v1/static/HOL235662_ToddlerGirl_DESK' alt='' />
                                <p>toddler girl +</p>
                            </div>
                            <div id='i4'>
                            <img src='https://gapprod.a.bigcontent.io/v1/static/HOL235662_ToddlerBoy_DESK' alt='' />
                                <p>toodler boy +</p>
                            </div>
                            <div id='i4'>
                            <img src='https://gapprod.a.bigcontent.io/v1/static/HOL235662_BabyGirl_DESK' alt='' />
                                <p>baby girl +</p>
                            </div>
                            <div id='i4'>
                            <img src='https://gapprod.a.bigcontent.io/v1/static/HOL235662_BabyBoy_DESK' alt='' />
                                <p>baby boy +</p>
                            </div>
                            

                        </div>

                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Homepage