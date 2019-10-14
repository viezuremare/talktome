const body = document.querySelector('body')
const wrapper = document.getElementById('wrapper')

// Splash Screen
const splash = document.getElementById('splash')
let introtext = document.getElementById('introtext')
let introtext2 = document.getElementById('introtext2')
let introtext3 = document.getElementById('introtext3')
let littlediv2 = document.getElementById('littlediv2')
let continueButton = document.getElementById('continueButton')

// Display
const topdisplay = document.getElementById('topdisplay')

const audiodisplay = document.getElementById('audiodisplay')

let audiolist = []

const btndel = document.getElementById('btndel')

const btnplay = document.getElementById('btnplay')



// Category
const catbox = document.getElementsByClassName('catbox')
catboxArray = Array.from(catbox)

const imgcat = document.getElementsByClassName('imgcat')
imgcatarray = Array.from(imgcat)

const press = document.getElementsByClassName('press')
pressarray = Array.from(press)

const s1 = document.getElementById('side1')
const s2 = document.getElementById('side2')

const category = document.getElementsByClassName('category')
categoryArray = Array.from(category)

const cataudio = document.getElementsByClassName('cataudio')
cataudioarray = Array.from(cataudio)

const txtcatimage = document.getElementsByClassName('txtcatimage')
txtcatimagearray = Array.from(txtcatimage)

// Main
const imagecl = document.getElementsByClassName('imagecl')
imgarray = Array.from(imagecl)

const mainaudio = document.getElementsByClassName('mainaudio')
mainaudioarray = Array.from(mainaudio)

const txtpageimage = document.getElementsByClassName('txtpageimage')
txtpageimagearray = Array.from(txtpageimage)

const p1 = document.getElementsByClassName('page1')
p1array = Array.from(p1)

const p2 = document.getElementsByClassName('page2')
p2array = Array.from(p2)

const p3 = document.getElementsByClassName('page3')
p3array = Array.from(p3)

const p4 = document.getElementsByClassName('page4')
p4array = Array.from(p4)

const pageimagewrapper = document.getElementsByClassName('pageimagewrapper')
pgimgwrappArray = Array.from(pageimagewrapper)


// Database
var db;

// Tocca Settings
window.tocca({
    swipeThreshold: 100,
    tapThreshold: 150, 
    dbltapThreshold: 200,
    longtapThreshold: 500           
})


// Utils

// Remove Blur
function removeBlur() {
    p1array.forEach(el => {
        el.style.pointerEvents = 'auto'
        el.classList.remove('is-blurred')
    })
    p2array.forEach(el => {
        el.style.pointerEvents = 'auto'
        el.classList.remove('is-blurred')
    })
    p3array.forEach(el => {
        el.style.pointerEvents = 'auto'
        el.classList.remove('is-blurred')
    })
    p4array.forEach(el => {
        el.style.pointerEvents = 'auto'
        el.classList.remove('is-blurred')
    })
    s1.style.pointerEvents = 'auto'
    s1.classList.remove('is-blurred')
    s2.style.pointerEvents = 'auto'
    s2.classList.remove('is-blurred')
    topdisplay.style.pointerEvents = 'auto'
    topdisplay.classList.remove('is-blurred2')
}

// Blur Background
function blurBackground() {

    wrapper.style.position = "fixed"
    p1array.forEach(el => {
        el.style.pointerEvents = "none"
        el.style.touchAction = 'none'
        el.style.overflowY = 'hidden'
        el.classList.add('is-blurred')
    })
    p2array.forEach(el => {
        el.style.pointerEvents = "none"
        el.style.touchAction = 'none'
        el.style.overflowY = 'hidden'
        el.classList.add('is-blurred')
    })
    p3array.forEach(el => {
        el.style.pointerEvents = "none"
        el.style.touchAction = 'none'
        el.style.overflowY = 'hidden'
        el.classList.add('is-blurred')
    })
    p4array.forEach(el => {
        el.style.pointerEvents = "none"
        el.style.touchAction = 'none'
        el.style.overflowY = 'hidden'
        el.classList.add('is-blurred')
    })
    s1.style.touchAction = "none"
    s1.style.pointerEvents = "none"
    s1.style.overflowY = "hidden"
    s1.classList.add('is-blurred')
    s2.style.touchAction = "none"
    s2.style.pointerEvents = "none"
    s2.style.overflowY = "hidden"
    s2.classList.add('is-blurred')
    topdisplay.style.pointerEvents = 'none'
    topdisplay.style.touchAction = 'none'
    topdisplay.style.overflowX = 'hidden'
    topdisplay.style.overflowY = 'hidden'
    topdisplay.classList.add('is-blurred2')
}



function splashscr () {

     // fade in
     setTimeout(() => {
        introtext.classList.remove('hidden')
        introtext.classList.add('visib')
    }, 900);
    
    setTimeout(() => {
        introtext2.classList.remove('hidden')
        introtext2.classList.add('visib')
    }, 1400);
    
    setTimeout(() => {
        introtext3.classList.remove('hidden')
        introtext3.classList.add('visib')
    }, 1800);

    setTimeout(() => {
        littlediv2.classList.remove('hidden')
        littlediv2.classList.add('visib')     
    }, 2200);

    setTimeout(() => {
        continueButton.classList.remove('hidden')
        continueButton.classList.add('visib')
    }, 3200);
    
    
    continueButton.addEventListener('tap', () => {
        // fade out
        setTimeout(() => {
            introtext.classList.remove('visib')
            introtext.classList.add('hidden')
        }, 800);
        
        setTimeout(() => {
            introtext2.classList.remove('visib')
            introtext2.classList.add('hidden')
        }, 1000);
        
        setTimeout(() => {
            introtext3.classList.remove('visib')
            introtext3.classList.add('hidden')
        }, 1200);

        // remove splash screen
        setTimeout(() => {
            splash.style.display= "none"
        }, 1250) 
    })
    
}


document.addEventListener("deviceready", onload, false);

    // Open Database
    function onload() { 


        blurBackground()

        // Create Menu PopUp
        var initial1 = document.createElement('button')
        initial1.classList.add('trans1off')
        var menutext1 =  document.createElement('span')
        menutext1.classList.add('txtpageimage')
        menutext1.innerHTML = 'Português PT'
        var menuimg1 = document.createElement('img')
        menuimg1.classList.add('imageclmenu')
        menuimg1.src = 'img/Languages/pt.png'
        splash.appendChild(initial1)
        initial1.appendChild(menutext1)
        initial1.appendChild(menuimg1)

        var initial2 = document.createElement('button')
        initial2.classList.add('trans2off')
        var menutext2 =  document.createElement('span')
        menutext2.classList.add('txtpageimage')
        menutext2.innerHTML = 'Español ES'
        var menuimg2 = document.createElement('img')
        menuimg2.classList.add('imageclmenu')
        menuimg2.src = 'img/Languages/es.png'
        splash.appendChild(initial2)
        initial2.appendChild(menutext2)
        initial2.appendChild(menuimg2)

        var initial3 = document.createElement('button')
        initial3.classList.add('trans2off')
        var menutext3 =  document.createElement('span')
        menutext3.classList.add('txtpageimage')
        menutext3.innerHTML = 'Italiano IT'
        var menuimg3 = document.createElement('img')
        menuimg3.classList.add('imageclmenu')
        menuimg3.src = 'img/Languages/it.png'
        splash.appendChild(initial3)
        initial3.appendChild(menutext3)
        initial3.appendChild(menuimg3)


        var initial4 = document.createElement('button')
        initial4.classList.add('trans2off')
        var menutext4 =  document.createElement('span')
        menutext4.classList.add('txtpageimage')
        menutext4.innerHTML = 'Română RO'
        var menuimg4 = document.createElement('img')
        menuimg4.classList.add('imageclmenu')
        menuimg4.src = 'img/Languages/ro.png'
        splash.appendChild(initial4)
        initial4.appendChild(menutext4)
        initial4.appendChild(menuimg4)

        // var initial10 = document.createElement('button')
        // initial10.classList.add('trans2off')
        // var menutext10 =  document.createElement('span')
        // menutext10.classList.add('txtpageimage')
        // menutext10.innerHTML = 'Português PT'
        // var menuimg10 = document.createElement('img')
        // menuimg10.classList.add('imageclmenu')
        // menuimg10.src = 'img/Languages/pt.png'
        // splash.appendChild(initial10)
        // initial10.appendChild(menutext10)
        // initial10.appendChild(menuimg10)

        // var initial4 = document.createElement('button')
        // initial4.classList.add('trans2off')
        // var menutext4 =  document.createElement('span')
        // menutext4.classList.add('txtpageimage')
        // menutext4.innerHTML = 'Español ES'
        // var menuimg4 = document.createElement('img')
        // menuimg4.classList.add('imageclmenu')
        // menuimg4.src = 'img/Languages/es.png'
        // splash.appendChild(initial4)
        // initial4.appendChild(menutext4)
        // initial4.appendChild(menuimg4)

        

        // var initial6 = document.createElement('button')
        // initial6.classList.add('trans2off')
        // var menutext6 =  document.createElement('span')
        // menutext6.classList.add('txtpageimage')
        // menutext6.innerHTML = '中文 CN'
        // var menuimg6 = document.createElement('img')
        // menuimg6.classList.add('imageclmenu')
        // menuimg6.src = 'img/Languages/cn.png'
        // splash.appendChild(initial6)
        // initial6.appendChild(menutext6)
        // initial6.appendChild(menuimg6)

        // var initial7 = document.createElement('button')
        // initial7.classList.add('trans2off')
        // var menutext7 =  document.createElement('span')
        // menutext7.classList.add('txtpageimage')
        // menutext7.innerHTML = '粵語 HK'
        // var menuimg7 = document.createElement('img')
        // menuimg7.classList.add('imageclmenu')
        // menuimg7.src = 'img/Languages/hk.png'
        // splash.appendChild(initial7)
        // initial7.appendChild(menutext7)
        // initial7.appendChild(menuimg7)

        // var initial8 = document.createElement('button')
        // initial8.classList.add('trans2off')
        // var menutext8 =  document.createElement('span')
        // menutext8.classList.add('txtpageimage')
        // menutext8.innerHTML = '한국어 KR'
        // var menuimg8 = document.createElement('img')
        // menuimg8.classList.add('imageclmenu')
        // menuimg8.src = 'img/Languages/kr.png'
        // splash.appendChild(initial8)
        // initial8.appendChild(menutext8)
        // initial8.appendChild(menuimg8)

        // var initial9 = document.createElement('button')
        // initial9.classList.add('trans2off')
        // var menutext9 =  document.createElement('span')
        // menutext9.classList.add('txtpageimage')
        // menutext9.innerHTML = '日本語 JP'
        // var menuimg9 = document.createElement('img')
        // menuimg9.classList.add('imageclmenu')
        // menuimg9.src = 'img/Languages/jp.png'
        // splash.appendChild(initial9)
        // initial9.appendChild(menutext9)
        // initial9.appendChild(menuimg9)

        setTimeout(() => {
            initial1.classList.remove('trans1off')
            initial1.classList.add('lang1on')
            initial2.classList.remove('trans2off')
            initial2.classList.add('lang2on')
            initial3.classList.remove('trans2off')
            initial3.classList.add('lang3on')
            initial4.classList.remove('trans2off')
            initial4.classList.add('lang4on')
            // initial5.classList.remove('trans2off')
            // initial5.classList.add('lang5on')
            // initial6.classList.remove('trans2off')
            // initial6.classList.add('lang6on')
            // initial7.classList.remove('trans2off')
            // initial7.classList.add('lang7on')
            // initial8.classList.remove('trans2off')
            // initial8.classList.add('lang8on')
            // initial9.classList.remove('trans2off')
            // initial9.classList.add('lang9on')
            
        }, 100);

        initial1.addEventListener('tap', () => {
            db = window.sqlitePlugin.openDatabase(
                {name: "aacdatabase_PT.db", location: 'default', createFromLocation: 1});
                db.transaction(function(tx) {
                    tx.executeSql('SELECT * FROM maintable', [], function(tx, rs) {
                        var len = rs.rows.length;
                        console.log(len + " rows found.");
                        console.log(imgarray.length)
                        for (let i=0; i<len; i++){
                            console.log("Row = " + rs.rows.item(i).id + " Image =  " + rs.rows.item(i).image  + " sound =  " + rs.rows.item(i).sound);
                        }  
                        for (let j=0; j<imgarray.length; j++) {
                            imgarray[j].src = rs.rows.item(j).image
                            mainaudioarray[j].src = rs.rows.item(j).sound
                            console.log("Row = " + rs.rows.item(j).id + " sound =  " + rs.rows.item(j).sound);
                            txtpageimagearray[j].innerHTML = rs.rows.item(j).description
                        }
                    }, function(tx, error) {
                      console.log('SELECT main error: ' + error.message);
                    });
                })
                db.transaction(function(tx) {
                    tx.executeSql('SELECT * FROM cattable', [], function(tx, rs) {
                        var lencat = rs.rows.length;
                        console.log(lencat + " rows found.");
                        console.log(imgcatarray.length)
                        for (let i=0; i<lencat; i++){
                            console.log("Row = " + rs.rows.item(i).id + " Image =  " + rs.rows.item(i).image);
                        }
                        for (let j=0; j<imgcatarray.length; j++) {
                            imgcatarray[j].src = rs.rows.item(j).image
                            cataudioarray[j].src = rs.rows.item(j).sound
                            console.log("Row = " + rs.rows.item(j).id + " sound =  " + rs.rows.item(j).sound);
                            txtcatimagearray[j].innerHTML = rs.rows.item(j).description
                        }
                    }, function(tx, error) {
                      console.log('SELECT cat error: ' + error.message);
                    });
                });
                splash.removeChild(initial1)
                splash.removeChild(initial2)
                splash.removeChild(initial3)
                splash.removeChild(initial4)
            splashscr()
            removeBlur()
        })

        initial2.addEventListener('tap', () => {
            db = window.sqlitePlugin.openDatabase(
                {name: "aacdatabase_ES.db", location: 'default', createFromLocation: 1});
                db.transaction(function(tx) {
                    tx.executeSql('SELECT * FROM maintable', [], function(tx, rs) {
                        var len = rs.rows.length;
                        console.log(len + " rows found.");
                        console.log(imgarray.length)
                        for (let i=0; i<len; i++){
                            console.log("Row = " + rs.rows.item(i).id + " Image =  " + rs.rows.item(i).image  + " sound =  " + rs.rows.item(i).sound);
                        }  
                        for (let j=0; j<imgarray.length; j++) {
                            imgarray[j].src = rs.rows.item(j).image
                            mainaudioarray[j].src = rs.rows.item(j).sound
                            console.log("Row = " + rs.rows.item(j).id + " sound =  " + rs.rows.item(j).sound);
                            txtpageimagearray[j].innerHTML = rs.rows.item(j).description
                        }
                    }, function(tx, error) {
                      console.log('SELECT main error: ' + error.message);
                    });
                })
                db.transaction(function(tx) {
                    tx.executeSql('SELECT * FROM cattable', [], function(tx, rs) {
                        var lencat = rs.rows.length;
                        console.log(lencat + " rows found.");
                        console.log(imgcatarray.length)
                        for (let i=0; i<lencat; i++){
                            console.log("Row = " + rs.rows.item(i).id + " Image =  " + rs.rows.item(i).image);
                        }
                        for (let j=0; j<imgcatarray.length; j++) {
                            imgcatarray[j].src = rs.rows.item(j).image
                            cataudioarray[j].src = rs.rows.item(j).sound
                            console.log("Row = " + rs.rows.item(j).id + " sound =  " + rs.rows.item(j).sound);
                            txtcatimagearray[j].innerHTML = rs.rows.item(j).description
                        }
                    }, function(tx, error) {
                      console.log('SELECT cat error: ' + error.message);
                    });
                });
            splash.removeChild(initial1)
            splash.removeChild(initial2)
            splash.removeChild(initial3)
            splash.removeChild(initial4)
            splashscr()
            removeBlur()
        })

        initial3.addEventListener('tap', () => {
            db = window.sqlitePlugin.openDatabase(
                {name: "aacdatabase_IT.db", location: 'default', createFromLocation: 1});
                db.transaction(function(tx) {
                    tx.executeSql('SELECT * FROM maintable', [], function(tx, rs) {
                        var len = rs.rows.length;
                        console.log(len + " rows found.");
                        console.log(imgarray.length)
                        for (let i=0; i<len; i++){
                            console.log("Row = " + rs.rows.item(i).id + " Image =  " + rs.rows.item(i).image  + " sound =  " + rs.rows.item(i).sound);
                        }  
                        for (let j=0; j<imgarray.length; j++) {
                            imgarray[j].src = rs.rows.item(j).image
                            mainaudioarray[j].src = rs.rows.item(j).sound
                            console.log("Row = " + rs.rows.item(j).id + " sound =  " + rs.rows.item(j).sound);
                            txtpageimagearray[j].innerHTML = rs.rows.item(j).description
                        }
                    }, function(tx, error) {
                      console.log('SELECT main error: ' + error.message);
                    });
                })
                db.transaction(function(tx) {
                    tx.executeSql('SELECT * FROM cattable', [], function(tx, rs) {
                        var lencat = rs.rows.length;
                        console.log(lencat + " rows found.");
                        console.log(imgcatarray.length)
                        for (let i=0; i<lencat; i++){
                            console.log("Row = " + rs.rows.item(i).id + " Image =  " + rs.rows.item(i).image);
                        }
                        for (let j=0; j<imgcatarray.length; j++) {
                            imgcatarray[j].src = rs.rows.item(j).image
                            cataudioarray[j].src = rs.rows.item(j).sound
                            console.log("Row = " + rs.rows.item(j).id + " sound =  " + rs.rows.item(j).sound);
                            txtcatimagearray[j].innerHTML = rs.rows.item(j).description
                        }
                    }, function(tx, error) {
                      console.log('SELECT cat error: ' + error.message);
                    });
                });
            splash.removeChild(initial1)
            splash.removeChild(initial2)
            splash.removeChild(initial3)
            splash.removeChild(initial4)
            splashscr()
            removeBlur()
        })

        initial4.addEventListener('tap', () => {
            db = window.sqlitePlugin.openDatabase(
                {name: "aacdatabase_RO.db", location: 'default', createFromLocation: 1});
                db.transaction(function(tx) {
                    tx.executeSql('SELECT * FROM maintable', [], function(tx, rs) {
                        var len = rs.rows.length;
                        console.log(len + " rows found.");
                        console.log(imgarray.length)
                        for (let i=0; i<len; i++){
                            console.log("Row = " + rs.rows.item(i).id + " Image =  " + rs.rows.item(i).image  + " sound =  " + rs.rows.item(i).sound);
                        }  
                        for (let j=0; j<imgarray.length; j++) {
                            imgarray[j].src = rs.rows.item(j).image
                            mainaudioarray[j].src = rs.rows.item(j).sound
                            console.log("Row = " + rs.rows.item(j).id + " sound =  " + rs.rows.item(j).sound);
                            txtpageimagearray[j].innerHTML = rs.rows.item(j).description
                        }
                    }, function(tx, error) {
                      console.log('SELECT main error: ' + error.message);
                    });
                })
                db.transaction(function(tx) {
                    tx.executeSql('SELECT * FROM cattable', [], function(tx, rs) {
                        var lencat = rs.rows.length;
                        console.log(lencat + " rows found.");
                        console.log(imgcatarray.length)
                        for (let i=0; i<lencat; i++){
                            console.log("Row = " + rs.rows.item(i).id + " Image =  " + rs.rows.item(i).image);
                        }
                        for (let j=0; j<imgcatarray.length; j++) {
                            imgcatarray[j].src = rs.rows.item(j).image
                            cataudioarray[j].src = rs.rows.item(j).sound
                            console.log("Row = " + rs.rows.item(j).id + " sound =  " + rs.rows.item(j).sound);
                            txtcatimagearray[j].innerHTML = rs.rows.item(j).description
                        }
                    }, function(tx, error) {
                      console.log('SELECT cat error: ' + error.message);
                    });
                });
            splashscr()
            splash.removeChild(initial1)
            splash.removeChild(initial2)
            splash.removeChild(initial3)
            splash.removeChild(initial4)
            removeBlur()
        })

        // initial5.addEventListener('tap', () => {
        //     db = window.sqlitePlugin.openDatabase(
        //         {name: "aacdatabase_FR.db", location: 'default', createFromLocation: 1});
        //         db.transaction(function(tx) {
        //             tx.executeSql('SELECT * FROM maintable', [], function(tx, rs) {
        //                 var len = rs.rows.length;
        //                 console.log(len + " rows found.");
        //                 console.log(imgarray.length)
        //                 for (let i=0; i<len; i++){
        //                     console.log("Row = " + rs.rows.item(i).id + " Image =  " + rs.rows.item(i).image  + " sound =  " + rs.rows.item(i).sound);
        //                 }  
        //                 for (let j=0; j<imgarray.length; j++) {
        //                     imgarray[j].src = rs.rows.item(j).image
        //                     mainaudioarray[j].src = rs.rows.item(j).sound
        //                     console.log("Row = " + rs.rows.item(j).id + " sound =  " + rs.rows.item(j).sound);
        //                     txtpageimagearray[j].innerHTML = rs.rows.item(j).description
        //                 }
        //             }, function(tx, error) {
        //               console.log('SELECT main error: ' + error.message);
        //             });
        //         })
        //         db.transaction(function(tx) {
        //             tx.executeSql('SELECT * FROM cattable', [], function(tx, rs) {
        //                 var lencat = rs.rows.length;
        //                 console.log(lencat + " rows found.");
        //                 console.log(imgcatarray.length)
        //                 for (let i=0; i<lencat; i++){
        //                     console.log("Row = " + rs.rows.item(i).id + " Image =  " + rs.rows.item(i).image);
        //                 }
        //                 for (let j=0; j<imgcatarray.length; j++) {
        //                     imgcatarray[j].src = rs.rows.item(j).image
        //                     cataudioarray[j].src = rs.rows.item(j).sound
        //                     console.log("Row = " + rs.rows.item(j).id + " sound =  " + rs.rows.item(j).sound);
        //                     txtcatimagearray[j].innerHTML = rs.rows.item(j).description
        //                 }
        //             }, function(tx, error) {
        //               console.log('SELECT cat error: ' + error.message);
        //             });
        //         });
        //     splashscr()
        //     splash.removeChild(initial1)
        //     // splash.removeChild(initial2)
        //     // splash.removeChild(initial3)
        //     // splash.removeChild(initial4)
        //     splash.removeChild(initial5)
        //     splash.removeChild(initial6)
        //     splash.removeChild(initial7)
        //     splash.removeChild(initial8)
        //     splash.removeChild(initial9)
        //     removeBlur()
        // })

        // initial6.addEventListener('tap', () => {
        //     db = window.sqlitePlugin.openDatabase(
        //         {name: "aacdatabase_CN.db", location: 'default', createFromLocation: 1});
        //         db.transaction(function(tx) {
        //             tx.executeSql('SELECT * FROM maintable', [], function(tx, rs) {
        //                 var len = rs.rows.length;
        //                 console.log(len + " rows found.");
        //                 console.log(imgarray.length)
        //                 for (let i=0; i<len; i++){
        //                     console.log("Row = " + rs.rows.item(i).id + " Image =  " + rs.rows.item(i).image  + " sound =  " + rs.rows.item(i).sound);
        //                 }  
        //                 for (let j=0; j<imgarray.length; j++) {
        //                     imgarray[j].src = rs.rows.item(j).image
        //                     mainaudioarray[j].src = rs.rows.item(j).sound
        //                     console.log("Row = " + rs.rows.item(j).id + " sound =  " + rs.rows.item(j).sound);
        //                     txtpageimagearray[j].innerHTML = rs.rows.item(j).description
        //                 }
        //             }, function(tx, error) {
        //               console.log('SELECT main error: ' + error.message);
        //             });
        //         })
        //         db.transaction(function(tx) {
        //             tx.executeSql('SELECT * FROM cattable', [], function(tx, rs) {
        //                 var lencat = rs.rows.length;
        //                 console.log(lencat + " rows found.");
        //                 console.log(imgcatarray.length)
        //                 for (let i=0; i<lencat; i++){
        //                     console.log("Row = " + rs.rows.item(i).id + " Image =  " + rs.rows.item(i).image);
        //                 }
        //                 for (let j=0; j<imgcatarray.length; j++) {
        //                     imgcatarray[j].src = rs.rows.item(j).image
        //                     cataudioarray[j].src = rs.rows.item(j).sound
        //                     console.log("Row = " + rs.rows.item(j).id + " sound =  " + rs.rows.item(j).sound);
        //                     txtcatimagearray[j].innerHTML = rs.rows.item(j).description
        //                 }
        //             }, function(tx, error) {
        //               console.log('SELECT cat error: ' + error.message);
        //             });
        //         });
        //     splashscr()
        //     splash.removeChild(initial1)
        //     // splash.removeChild(initial2)
        //     // splash.removeChild(initial3)
        //     // splash.removeChild(initial4)
        //     splash.removeChild(initial5)
        //     splash.removeChild(initial6)
        //     splash.removeChild(initial7)
        //     splash.removeChild(initial8)
        //     splash.removeChild(initial9)
        //     removeBlur()
        // })

        // initial7.addEventListener('tap', () => {
        //     db = window.sqlitePlugin.openDatabase(
        //         {name: "aacdatabase_HK.db", location: 'default', createFromLocation: 1});
        //         db.transaction(function(tx) {
        //             tx.executeSql('SELECT * FROM maintable', [], function(tx, rs) {
        //                 var len = rs.rows.length;
        //                 console.log(len + " rows found.");
        //                 console.log(imgarray.length)
        //                 for (let i=0; i<len; i++){
        //                     console.log("Row = " + rs.rows.item(i).id + " Image =  " + rs.rows.item(i).image  + " sound =  " + rs.rows.item(i).sound);
        //                 }  
        //                 for (let j=0; j<imgarray.length; j++) {
        //                     imgarray[j].src = rs.rows.item(j).image
        //                     mainaudioarray[j].src = rs.rows.item(j).sound
        //                     console.log("Row = " + rs.rows.item(j).id + " sound =  " + rs.rows.item(j).sound);
        //                     txtpageimagearray[j].innerHTML = rs.rows.item(j).description
        //                 }
        //             }, function(tx, error) {
        //               console.log('SELECT main error: ' + error.message);
        //             });
        //         })
        //         db.transaction(function(tx) {
        //             tx.executeSql('SELECT * FROM cattable', [], function(tx, rs) {
        //                 var lencat = rs.rows.length;
        //                 console.log(lencat + " rows found.");
        //                 console.log(imgcatarray.length)
        //                 for (let i=0; i<lencat; i++){
        //                     console.log("Row = " + rs.rows.item(i).id + " Image =  " + rs.rows.item(i).image);
        //                 }
        //                 for (let j=0; j<imgcatarray.length; j++) {
        //                     imgcatarray[j].src = rs.rows.item(j).image
        //                     cataudioarray[j].src = rs.rows.item(j).sound
        //                     console.log("Row = " + rs.rows.item(j).id + " sound =  " + rs.rows.item(j).sound);
        //                     txtcatimagearray[j].innerHTML = rs.rows.item(j).description
        //                 }
        //             }, function(tx, error) {
        //               console.log('SELECT cat error: ' + error.message);
        //             });
        //         });
        //     splashscr()
        //     splash.removeChild(initial1)
        //     // splash.removeChild(initial2)
        //     // splash.removeChild(initial3)
        //     // splash.removeChild(initial4)
        //     splash.removeChild(initial5)
        //     splash.removeChild(initial6)
        //     splash.removeChild(initial7)
        //     splash.removeChild(initial8)
        //     splash.removeChild(initial9)
        //     removeBlur()
        // })

        // initial8.addEventListener('tap', () => {
        //     db = window.sqlitePlugin.openDatabase(
        //         {name: "aacdatabase_KR.db", location: 'default', createFromLocation: 1});
        //         db.transaction(function(tx) {
        //             tx.executeSql('SELECT * FROM maintable', [], function(tx, rs) {
        //                 var len = rs.rows.length;
        //                 console.log(len + " rows found.");
        //                 console.log(imgarray.length)
        //                 for (let i=0; i<len; i++){
        //                     console.log("Row = " + rs.rows.item(i).id + " Image =  " + rs.rows.item(i).image  + " sound =  " + rs.rows.item(i).sound);
        //                 }  
        //                 for (let j=0; j<imgarray.length; j++) {
        //                     imgarray[j].src = rs.rows.item(j).image
        //                     mainaudioarray[j].src = rs.rows.item(j).sound
        //                     console.log("Row = " + rs.rows.item(j).id + " sound =  " + rs.rows.item(j).sound);
        //                     txtpageimagearray[j].innerHTML = rs.rows.item(j).description
        //                 }
        //             }, function(tx, error) {
        //               console.log('SELECT main error: ' + error.message);
        //             });
        //         })
        //         db.transaction(function(tx) {
        //             tx.executeSql('SELECT * FROM cattable', [], function(tx, rs) {
        //                 var lencat = rs.rows.length;
        //                 console.log(lencat + " rows found.");
        //                 console.log(imgcatarray.length)
        //                 for (let i=0; i<lencat; i++){
        //                     console.log("Row = " + rs.rows.item(i).id + " Image =  " + rs.rows.item(i).image);
        //                 }
        //                 for (let j=0; j<imgcatarray.length; j++) {
        //                     imgcatarray[j].src = rs.rows.item(j).image
        //                     cataudioarray[j].src = rs.rows.item(j).sound
        //                     console.log("Row = " + rs.rows.item(j).id + " sound =  " + rs.rows.item(j).sound);
        //                     txtcatimagearray[j].innerHTML = rs.rows.item(j).description
        //                 }
        //             }, function(tx, error) {
        //               console.log('SELECT cat error: ' + error.message);
        //             });
        //         });
        //     splashscr()
        //     splash.removeChild(initial1)
        //     // splash.removeChild(initial2)
        //     // splash.removeChild(initial3)
        //     // splash.removeChild(initial4)
        //     splash.removeChild(initial5)
        //     splash.removeChild(initial6)
        //     splash.removeChild(initial7)
        //     splash.removeChild(initial8)
        //     splash.removeChild(initial9)
        //     removeBlur()
        // })

        // initial9.addEventListener('tap', () => {
        //     db = window.sqlitePlugin.openDatabase(
        //         {name: "aacdatabase_JP.db", location: 'default', createFromLocation: 1});
        //         db.transaction(function(tx) {
        //             tx.executeSql('SELECT * FROM maintable', [], function(tx, rs) {
        //                 var len = rs.rows.length;
        //                 console.log(len + " rows found.");
        //                 console.log(imgarray.length)
        //                 for (let i=0; i<len; i++){
        //                     console.log("Row = " + rs.rows.item(i).id + " Image =  " + rs.rows.item(i).image  + " sound =  " + rs.rows.item(i).sound);
        //                 }  
        //                 for (let j=0; j<imgarray.length; j++) {
        //                     imgarray[j].src = rs.rows.item(j).image
        //                     mainaudioarray[j].src = rs.rows.item(j).sound
        //                     console.log("Row = " + rs.rows.item(j).id + " sound =  " + rs.rows.item(j).sound);
        //                     txtpageimagearray[j].innerHTML = rs.rows.item(j).description
        //                 }
        //             }, function(tx, error) {
        //               console.log('SELECT main error: ' + error.message);
        //             });
        //         })
        //         db.transaction(function(tx) {
        //             tx.executeSql('SELECT * FROM cattable', [], function(tx, rs) {
        //                 var lencat = rs.rows.length;
        //                 console.log(lencat + " rows found.");
        //                 console.log(imgcatarray.length)
        //                 for (let i=0; i<lencat; i++){
        //                     console.log("Row = " + rs.rows.item(i).id + " Image =  " + rs.rows.item(i).image);
        //                 }
        //                 for (let j=0; j<imgcatarray.length; j++) {
        //                     imgcatarray[j].src = rs.rows.item(j).image
        //                     cataudioarray[j].src = rs.rows.item(j).sound
        //                     console.log("Row = " + rs.rows.item(j).id + " sound =  " + rs.rows.item(j).sound);
        //                     txtcatimagearray[j].innerHTML = rs.rows.item(j).description
        //                 }
        //             }, function(tx, error) {
        //               console.log('SELECT cat error: ' + error.message);
        //             });
        //         });
        //     splashscr()
        //     splash.removeChild(initial1)
        //     // splash.removeChild(initial2)
        //     // splash.removeChild(initial3)
        //     // splash.removeChild(initial4)
        //     splash.removeChild(initial5)
        //     splash.removeChild(initial6)
        //     splash.removeChild(initial7)
        //     splash.removeChild(initial8)
        //     splash.removeChild(initial9)
        //     removeBlur()
        // })
    }




// Swipe Pages

// Swipe Functionality Page 1 Left
p1array.forEach(element => {
    element.addEventListener('swipeleft', function(e) {
        element.style.webkitTransform = 'translateX(-100%)'
        element.style.transform = 'translateX(-100%)'
        element.style.transition = 'transform .1s'
        p2array.forEach(element2 => {
          element2.style.webkitTransform = 'translateX(-100%)'
          element2.style.transform = 'translateX(-100%)'
          element2.style.transition = 'transform .1s'
        })
        
    })
});


// Swipe Functionality Page 2 Left
p2array.forEach(element2 => {
    element2.addEventListener('swipeleft', function(e) {
        element2.style.transition = 'transform .1s'
        element2.style.webkitTransform = "translateX(-100%)"
        element2.style.transform = "translateX(-100%)"
            // p1array.forEach(element => {
            //     element.style.transition = 'transform .1s'
            //     element.style.webkitTransform = 'translateX(-100%)'
            //     element.style.transform = 'translateX(-100%)'
            // })   
            p3array.forEach(element3 => {
                element3.style.webkitTransform = 'translateX(-200%)'
                element3.style.transform = 'translateX(-200%)'
                element3.style.transition = 'transform .1s'
            })
    })
})


// Swipe Functionality Page 3 Left
p3array.forEach(element3 => {
    element3.addEventListener('swipeleft', function(e) {
        element3.style.transition = 'transform .1s'
        element3.style.webkitTransform = "translateX(-100%)"
        element3.style.transform = "translateX(-100%)"
            // p1array.forEach(element => {
            //     element.style.transition = 'transform .1s'
            //     element.style.webkitTransform = 'translateX(-100%)'
            //     element.style.transform = 'translateX(-100%)'
            // })   
            p4array.forEach(element4 => {
                element4.style.webkitTransform = 'translateX(-300%)'
                element4.style.transform = 'translateX(-300%)'
                element4.style.transition = 'transform .1s'
            })
    })
})



// Swipe Functionality Page 2 Right
p2array.forEach(element2 => {
    element2.addEventListener('swiperight', function(e) {
        element2.style.transition = 'transform .1s'
        element2.style.webkitTransform = "translateX(100%)"
        element2.style.transform = "translateX(100%)"
            p1array.forEach(element => {
                element.style.transition = 'transform .1s'
                element.style.webkitTransform = 'translateX(0%)'
                element.style.transform = 'translateX(0%)'
            })   
            
    })
})


// Swipe Functionality Page 3 Right
p3array.forEach(element3 => {
    element3.addEventListener('swiperight', function(e) {
        element3.style.transition = 'transform .1s'
        element3.style.webkitTransform = "translateX(200%)"
        element3.style.transform = "translateX(200%)"
            // p1array.forEach(element => {
            //     element.style.webkitTransform = 'translateX(-100%)'
            //     element.style.transform = 'translateX(-100%)'
            //     element.style.transition = 'transform .1s'
            // })  
            p2array.forEach(element2 => {
                element2.style.webkitTransform = 'translateX(-100%)'
                element2.style.transform = 'translateX(-100%)'
                element2.style.transition = 'transform .1s'
            }) 
    })
})

// Swipe Functionality Page 4 Right
p4array.forEach(element4 => {
    element4.addEventListener('swiperight', function(e) {
        element4.style.transition = 'transform .1s'
        element4.style.webkitTransform = "translateX(300%)"
        element4.style.transform = "translateX(300%)"
            // p1array.forEach(element => {
            //     element.style.webkitTransform = 'translateX(-100%)'
            //     element.style.transform = 'translateX(-100%)'
            //     element.style.transition = 'transform .1s'
            // })  
            p3array.forEach(element3 => {
                element3.style.webkitTransform = 'translateX(-200%)'
                element3.style.transform = 'translateX(-200%)'
                element3.style.transition = 'transform .1s'
            }) 
    })
})





// Reset Swiped Pages on Category Click
for (let i=0; i < categoryArray.length; i++) {
    categoryArray[i].addEventListener('tap', () => {  
        categoryArray[i].style.filter="brightness(100%)"
        categoryArray[i].style.webkitFilter="brightness(100%)"

        if (i!=0) {
            for (let j=0; j < i; j++) {
                categoryArray[j].style.webkitFilter="brightness(70%)"
                categoryArray[j].style.filter="brightness(70%)"
            }
            for (let m=i+1; m < categoryArray.length; m++) {
                categoryArray[m].style.webkitFilter="brightness(70%)"
                categoryArray[m].style.filter="brightness(70%)"
            }
        } else {
            for (let n=i+1; n < categoryArray.length; n++) {
                categoryArray[n].style.webkitFilter="brightness(70%)"
                categoryArray[n].style.filter="brightness(70%)"
            }
        }  
        p2array.forEach(element2 => {
                element2.style.webkitTransform = "translate(100%)" 
        })
        p1array.forEach(element => {
            element.style.webkitTransform = 'translate(0%)'
        })   
        p3array.forEach(element => {
            element.style.webkitTransform = 'translate(200%)'
        })   
        p4array.forEach(element => {
            element.style.webkitTransform = 'translate(300%)'
        })   
    })
}   



// Swipe Side Bars

// let startingY

// Swipe Functionality Bar 1
s1.addEventListener('swipeup', function(e) {
    s1.style.transition = 'transform .1s'
    s2.style.transition = 'transform .1s'
    s1.style.webkitTransform = 'translateY(-100%)'
    s2.style.webkitTransform = 'translateY(-100%)'
    s1.style.transform = 'translateY(-100%)'
    s2.style.transform = 'translateY(-100%)'
})

// Swipe Transition Effect Bar 1
// s1.addEventListener('touchstart', sonstart1)
// s1.addEventListener('touchmove', sonmove1)
// s1.addEventListener('touchend', sonend1)

// function sonstart1(ev) {
//     startingY = ev.touches[0].clientY
// }

// function sonmove1(ev) {
//     let change = startingY - ev.touches[0].clientY
//     if (change < 0) {
//         return
//     }
//     s1.style.top = "-" + change + "px"
//     s2.style.top = (screen.height - change) + "px"
//     ev.preventDefault()
// }

// function sonend1(ev) {
//     let change = startingY - ev.changedTouches[0].clientY
//     if (change < screen.height / 30 ) {
//         s1.style.top = '0'
//         s2.style.top = '100%'
//     }
// }

// Swipe Functionality Bar 2
s2.addEventListener('swipedown', function() {
    s1.style.transition = 'transform .1s'
    s2.style.transition = 'transform .1s'
    s1.style.webkitTransform = 'translateY(0%)'
    s2.style.webkitTransform = "translateY(100%)"
    s1.style.transform = 'translateY(0%)'
    s2.style.transform = "translateY(100%)"
})

// // Swipe Transition Effect Bar 2
// s2.addEventListener('touchstart',sonstart2)
// s2.addEventListener('touchmove',sonmove2)
// s2.addEventListener('touchend',sonend2)

// function sonstart2(ev) {
//     startingY = ev.touches[0].clientY
//     s1.style.transition = ''
//     s2.style.transition = ''
// }

// function sonmove2(ev) {
//     let change = ev.touches[0].clientY - startingY
//     if (change < 0) {
//         return
//     }
//     s1.style.top = (change - screen.height) + "px"
//     s2.style.top = change + "px"
//     ev.preventDefault()
// }

// function sonend2(ev) {
//     let change = ev.changedTouches[0].clientY - startingY
//     if (change < screen.height / 30) {
//         s1.style.top = "-100%"
//         s2.style.top = "0"
//     } 
// }


// Display Board

// replicate tapped images onto display board
imgarray.forEach(element => {
    element.addEventListener('tap', function() {

        // replicate and store afferent sounds 
        var au = document.createElement('audio')
        au.src = element.nextElementSibling.src

        // if display has more than 3 images
        if (topdisplay.childElementCount > 4) { // one element is the play/del buttons div
            
            // resize images to be smaller 
            let dlist = Array.from(topdisplay.children)
            for (let i = 2; i < dlist.length; i++) {
                
                // landscape display image dimensions
                if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary")  {
                dlist[i].style.padding = '0'
                dlist[i].style.boxSizing = 'border-box'
                dlist[i].style.margin = '1% 0.9%'
                dlist[i].style.width = '12%'
                dlist[i].style.height = '60%'
                dlist[i].style.backgroundColor = 'white'
                dlist[i].style.float = 'left'
                dlist[i].style.position = 'relative'
                dlist[i].style.zIndex = '998'
                dlist[i].style.top = '4vh'
                dlist[i].style.bordeRadius = '10px'
                dlist[i].style.border = '1px solid black'
                dlist[i].style.boxShadow = '5px 5px 10px #000000'

                screen.orientation.addEventListener('change', () => {
                    if (screen.orientation.type === "portrait-primary" || screen.orientation.type === "portrait-secondary")  {
                    dlist[i].style.padding = '0'
                    dlist[i].style.boxSizing = 'border-box'
                    dlist[i].style.margin = '1% 1%'
                    dlist[i].style.width = '17%'
                    dlist[i].style.height = '40%'
                    dlist[i].style.backgroundColor = 'white'
                    dlist[i].style.float = 'left'
                    dlist[i].style.position = 'relative'
                    dlist[i].style.zIndex = '998'
                    dlist[i].style.top = '-11.5vh'
                    dlist[i].style.bordeRadius = '10px'
                    dlist[i].style.border = '1px solid black'
                    dlist[i].style.boxShadow = '5px 5px 10px #000000'
                    } 

                    if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary")  {
                        dlist[i].style.padding = '0'
                        dlist[i].style.boxSizing = 'border-box'
                        dlist[i].style.margin = '1% 0.9%'
                        dlist[i].style.width = '12%'
                        dlist[i].style.height = '60%'
                        dlist[i].style.backgroundColor = 'white'
                        dlist[i].style.float = 'left'
                        dlist[i].style.position = 'relative'
                        dlist[i].style.zIndex = '998'
                        dlist[i].style.top = '4vh'
                        dlist[i].style.bordeRadius = '10px'
                        dlist[i].style.border = '1px solid black'
                        dlist[i].style.boxShadow = '5px 5px 10px #000000'
                    }
                })
                } else {
                    // portrait display image dimensions
                    dlist[i].style.padding = '0'
                    dlist[i].style.boxSizing = 'border-box'
                    dlist[i].style.margin = '1% 1%'
                    dlist[i].style.width = '17%'
                    dlist[i].style.height = '40%'
                    dlist[i].style.backgroundColor = 'white'
                    dlist[i].style.float = 'left'
                    dlist[i].style.position = 'relative'
                    dlist[i].style.zIndex = '998'
                    dlist[i].style.top = '-11.5vh'
                    dlist[i].style.bordeRadius = '10px'
                    dlist[i].style.border = '1px solid black'
                    dlist[i].style.boxShadow = '5px 5px 10px #000000'

                    screen.orientation.addEventListener('change', () => {
                        if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary")  {
                            dlist[i].style.padding = '0'
                            dlist[i].style.boxSizing = 'border-box'
                            dlist[i].style.margin = '1% 0.9%'
                            dlist[i].style.width = '12%'
                            dlist[i].style.height = '60%'
                            dlist[i].style.backgroundColor = 'white'
                            dlist[i].style.float = 'left'
                            dlist[i].style.position = 'relative'
                            dlist[i].style.zIndex = '998'
                            dlist[i].style.top = '4vh'
                            dlist[i].style.bordeRadius = '10px'
                            dlist[i].style.border = '1px solid black'
                            dlist[i].style.boxShadow = '5px 5px 10px #000000'
                        }

                        if (screen.orientation.type === "portrait-primary" || screen.orientation.type === "portrait-secondary")  {
                            dlist[i].style.padding = '0'
                            dlist[i].style.boxSizing = 'border-box'
                            dlist[i].style.margin = '1% 1%'
                            dlist[i].style.width = '17%'
                            dlist[i].style.height = '40%'
                            dlist[i].style.backgroundColor = 'white'
                            dlist[i].style.float = 'left'
                            dlist[i].style.position = 'relative'
                            dlist[i].style.zIndex = '998'
                            dlist[i].style.top = '-11.5vh'
                            dlist[i].style.bordeRadius = '10px'
                            dlist[i].style.border = '1px solid black'
                            dlist[i].style.boxShadow = '5px 5px 10px #000000'
                        } 
                    })
                }
            }

            // create smaller images from here on

            // landscape display image dimensions
            if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary") {
            var im = document.createElement('img')
            im.src = element.src  
            im.style.padding = '0'
            im.style.boxSizing = 'border-box'
            im.style.margin = '1% 0.9%'
            im.style.width = '12%'
            im.style.height = '60%'
            im.style.float = 'left'
            im.style.backgroundColor = 'white'
            im.style.position = 'relative'
            im.style.zIndex = '998'
            im.style.top = '4vh'
            im.style.borderRadius = '10px'
            im.style.border = '1px solid black'
            im.style.boxShadow = '5px 5px 10px #000000'

            screen.orientation.addEventListener('change', () => {
                if (screen.orientation.type === "portrait-primary" || screen.orientation.type === "portrait-secondary") {
        
                    im.src = element.src  
                    im.style.padding = '0'
                    im.style.boxSizing = 'border-box'
                    im.style.margin = '1% 1%'
                    im.style.width = '17%'
                    im.style.height = '40%'
                    im.style.float = 'left'
                    im.style.backgroundColor = 'white'
                    im.style.position = 'relative'
                    im.style.zIndex = '998'
                    im.style.top = '-11.5vh'
                    im.style.borderRadius = '10px'
                    im.style.border = '1px solid black'
                    im.style.boxShadow = '5px 5px 10px #000000'
                }    

                if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary") {
                    
                    im.src = element.src  
                    im.style.padding = '0'
                    im.style.boxSizing = 'border-box'
                    im.style.margin = '1% 0.9%'
                    im.style.width = '12%'
                    im.style.height = '60%'
                    im.style.float = 'left'
                    im.style.backgroundColor = 'white'
                    im.style.position = 'relative'
                    im.style.zIndex = '998'
                    im.style.top = '4vh'
                    im.style.borderRadius = '10px'
                    im.style.border = '1px solid black'
                    im.style.boxShadow = '5px 5px 10px #000000'
                }
            })
            } else {
                // portrait display image dimensions
                var im = document.createElement('img')
                im.src = element.src  
                im.style.padding = '0'
                im.style.boxSizing = 'border-box'
                im.style.margin = '1% 1%'
                im.style.width = '17%'
                im.style.height = '40%'
                im.style.float = 'left'
                im.style.backgroundColor = 'white'
                im.style.position = 'relative'
                im.style.zIndex = '998'
                im.style.top = '-11.5vh'
                im.style.borderRadius = '10px'
                im.style.border = '1px solid black'
                im.style.boxShadow = '5px 5px 10px #000000'

                screen.orientation.addEventListener('change', () => {
                    if (screen.orientation.type === "portrait-primary" || screen.orientation.type === "portrait-secondary") {
                       
                        im.src = element.src  
                        im.style.padding = '0'
                        im.style.boxSizing = 'border-box'
                        im.style.margin = '1% 1%'
                        im.style.width = '17%'
                        im.style.height = '40%'
                        im.style.float = 'left'
                        im.style.backgroundColor = 'white'
                        im.style.position = 'relative'
                        im.style.zIndex = '998'
                        im.style.top = '-11.5vh'
                        im.style.borderRadius = '10px'
                        im.style.border = '1px solid black'
                        im.style.boxShadow = '5px 5px 10px #000000'
                    }    
    
                    if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary") {
                        
                        im.src = element.src  
                        im.style.padding = '0'
                        im.style.boxSizing = 'border-box'
                        im.style.margin = '1% 0.9%'
                        im.style.width = '12%'
                        im.style.height = '60%'
                        im.style.float = 'left'
                        im.style.backgroundColor = 'white'
                        im.style.position = 'relative'
                        im.style.zIndex = '998'
                        im.style.top = '4vh'
                        im.style.borderRadius = '10px'
                        im.style.border = '1px solid black'
                        im.style.boxShadow = '5px 5px 10px #000000'
                    }
                })    
            }


        } else { // if display has <= 3 images
            

            // landscape display image dimensions
            if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary") {
                // create normal image
                var im = document.createElement('img')
                im.src = element.src  
                im.style.padding = '0'
                im.style.boxSizing = 'border-box'
                im.style.margin = '0 1.5%'
                im.style.width = '20vw'
                im.style.height = '20vh'
                im.style.float = 'left'
                im.style.backgroundColor = 'white'
                im.style.position = 'relative'
                im.style.zIndex = '998'
                im.style.top = '2vh'
                im.style.boxShadow = '5px 5px 10px #000000'
                im.style.borderRadius = '10px'

                screen.orientation.addEventListener('change', () => {
                    if (screen.orientation.type === "portrait-primary" || screen.orientation.type === "portrait-secondary") {
                    im.src = element.src  
                    im.style.padding = '0'
                    im.style.boxSizing = 'border-box'
                    im.style.margin = '0 2%'
                    im.style.width = '21vw'
                    im.style.height = '14vh'
                    im.style.float = 'left'
                    im.style.backgroundColor = 'white'
                    im.style.position = 'relative'
                    im.style.zIndex = '998'
                    im.style.top = '-6.5vh'
                    im.style.boxShadow = '5px 5px 10px #000000'
                    im.style.borderRadius = '10px'
                    }

                    if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary") {
                        im.src = element.src  
                        im.style.padding = '0'
                        im.style.boxSizing = 'border-box'
                        im.style.margin = '0 1.5%'
                        im.style.width = '20vw'
                        im.style.height = '20vh'
                        im.style.float = 'left'
                        im.style.backgroundColor = 'white'
                        im.style.position = 'relative'
                        im.style.zIndex = '998'
                        im.style.top = '2vh'
                        im.style.boxShadow = '5px 5px 10px #000000'
                        im.style.borderRadius = '10px'
                    }
                })
            } else {
                    // portrait display image dimensions
                    // create normal image
                    var im = document.createElement('img')
                    im.src = element.src  
                    im.style.padding = '0'
                    im.style.boxSizing = 'border-box'
                    im.style.margin = '0 2%'
                    im.style.width = '21vw'
                    im.style.height = '14vh'
                    im.style.float = 'left'
                    im.style.backgroundColor = 'white'
                    im.style.position = 'relative'
                    im.style.zIndex = '998'
                    im.style.top = '-6.5vh'
                    im.style.boxShadow = '5px 5px 10px #000000'
                    im.style.borderRadius = '10px'

                    screen.orientation.addEventListener('change', () => {
                        if (screen.orientation.type === "portrait-primary" || screen.orientation.type === "portrait-secondary") {
                        im.src = element.src  
                        im.style.padding = '0'
                        im.style.boxSizing = 'border-box'
                        im.style.margin = '0 2%'
                        im.style.width = '21vw'
                        im.style.height = '14vh'
                        im.style.float = 'left'
                        im.style.backgroundColor = 'white'
                        im.style.position = 'relative'
                        im.style.zIndex = '998'
                        im.style.top = '-6.5vh'
                        im.style.boxShadow = '5px 5px 10px #000000'
                        im.style.borderRadius = '10px'
                        }
    
                        if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary") {
                            im.src = element.src  
                            im.style.padding = '0'
                            im.style.boxSizing = 'border-box'
                            im.style.margin = '0 1.5%'
                            im.style.width = '20vw'
                            im.style.height = '20vh'
                            im.style.float = 'left'
                            im.style.backgroundColor = 'white'
                            im.style.position = 'relative'
                            im.style.zIndex = '998'
                            im.style.top = '2vh'
                            im.style.boxShadow = '5px 5px 10px #000000'
                            im.style.borderRadius = '10px'
                        }
                    })
            }
        }

        if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary") {
            // max number of images 5
            if (topdisplay.children.length <= 6) { // one child is the play/del button div
                console.log(topdisplay.childElementCount)
                // add images with sounds to display board 
                topdisplay.appendChild(im)  
                audiodisplay.appendChild(au)
                audiolist.push(au)
            } 

        } else {
            // max number of images 10
            if (topdisplay.children.length <= 9) {
                console.log(topdisplay.childElementCount)
                // add images with sounds to display board 
                topdisplay.appendChild(im)  
                audiodisplay.appendChild(au)
                audiolist.push(au)
            } 

            screen.orientation.addEventListener('change', () => { 
                if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary") {
                    // max number of images 5
                    while (topdisplay.children.length > 6) { // one child is the play/del button div 
                        topdisplay.removeChild(topdisplay.lastChild)
                        audiodisplay.removeChild(audiodisplay.lastChild)
                        audiolist.pop()
                    }
                }
            })
            
        }       
    })
});



// Delete Images with afferent Sounds

btndel.addEventListener('touchstart', function() {
    if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary") {
        btndel.style.boxShadow = '-1px 0px 5px black, inset 0px 1px 0px rgba(5, 146, 146, 0.2), inset 0px 0px 3px rgba(5, 146, 146, 0.3)'
        btndel.firstElementChild.style.transform = "translateY(-47%)"
        btndel.style.border = 'none'
        } else {
            btndel.style.boxShadow = '-1px 0px 5px black, inset 0px 1px 0px rgba(5, 146, 146, 0.2), inset 0px 0px 3px rgba(5, 146, 146, 0.3)'
            btndel.firstElementChild.style.transform = "translateY(-47%)"
            btndel.style.border = 'none'
        }

    console.log(topdisplay.children)

    // delete images from display 
    if (topdisplay.lastChild.id === 'btndel') {
        return
    } else {
        topdisplay.removeChild(topdisplay.lastChild)
    }
    
    // delete aferrent sounds
    console.log(audiodisplay.children)
    console.log(audiodisplay)
    console.log(Array.from(audiodisplay.children))
    audiodisplay.removeChild(audiodisplay.lastChild)
    audiolist.pop()
    console.log(audiodisplay.children)
    console.log(audiodisplay)
    console.log(Array.from(audiodisplay.children))

    // if less than 5 images are displayed 
    if (topdisplay.children.length < 6) { // 2 children are the buttons

        // resize images to bigger
        let dlist = Array.from(topdisplay.children)
            for (let i = 2; i < dlist.length; i++) {
                // landscape image dimensions
                if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary") {
                dlist[i].style.padding = '0'
                dlist[i].style.boxSizing = 'border-box'
                dlist[i].style.margin = '0 1.5%'
                dlist[i].style.width = '20vw'
                dlist[i].style.height = '20vh'
                dlist[i].style.float = 'left'
                dlist[i].style.position = 'relative'
                dlist[i].style.zIndex = '998'
                dlist[i].style.top = '2vh'
                dlist[i].style.boxShadow = '5px 5px 10px #000000'
                dlist[i].style.borderRadius = '10px'
                } else {
                    // portrait image dimensions
                    dlist[i].style.padding = '0'
                    dlist[i].style.margin = '0 2%'
                    dlist[i].style.width = '21vw'
                    dlist[i].style.height = '14vh'
                    dlist[i].style.float = 'left'
                    dlist[i].style.position = 'relative'
                    dlist[i].style.zIndex = '998'
                    dlist[i].style.top = '-6.5vh'
                    dlist[i].style.boxSizing = 'border-box'
                    dlist[i].style.boxShadow = '5px 5px 10px #000000'
                    dlist[i].style.borderRadius = '10px'
                }
            }
    }
})
btndel.addEventListener('touchend', () => {
    if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary") {
        btndel.style.boxShadow = '-1px 0px 5px black, inset 0px 1px 0px rgba(5, 146, 146, 0.3), inset 0px 0px 3px rgba(5, 146, 146, 0.5)'
        btndel.style.border = '1px solid white'
        btndel.firstElementChild.style.transform = "translateY(-50%)"
        } else {
            btndel.style.boxShadow = '-1px 0px 5px black, inset 0px 1px 0px rgba(5, 146, 146, 0.3), inset 0px 0px 3px rgba(5, 146, 146, 0.5)'
            btndel.firstElementChild.style.transform = "translateY(-50%)"
            btndel.style.border = '1px solid white'
        }
})


// Play Sounds for Displayed Images
 
btnplay.addEventListener('touchstart', function() {
    if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary") {
        btnplay.style.boxShadow = '-1px 0px 5px black, inset 0px 1px 0px rgba(5, 146, 146, 0.2), inset 0px 0px 3px rgba(5, 146, 146, 0.2)'
        btnplay.firstElementChild.style.transform = "translateY(-47%)"
        btnplay.style.border = 'none'
        } else {
            btnplay.style.boxShadow = '-1px 0px 5px black, inset 0px 1px 0px rgba(5, 146, 146, 0.2), inset 0px 0px 3px rgba(5, 146, 146, 0.2)'
            btnplay.firstElementChild.style.transform = "translateY(-47%)"
            btnplay.style.border = 'none'
        }

    console.log(audiodisplay.children)
    console.log(audiodisplay)
    console.log(Array.from(audiodisplay.children))
   

    console.log(audiolist.length)
    console.log(audiolist)
    audiolist[0].play()
    console.log(audiolist[0])
    for (let i = 0; i < audiolist.length-1; i++) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        audiolist[i].addEventListener('ended', () => {
            console.log(audiolist[i+1])
            audiolist[i+1].play()
            
        })
    }
    
    
})

btnplay.addEventListener('touchend', () => {
    if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary") {
        btnplay.style.boxShadow = '-1px 0px 5px black, inset 0px 1px 0px rgba(5, 146, 146, 0.3), inset 0px 0px 3px rgba(5, 146, 146, 0.5)'
        btnplay.style.border = '1px solid white'
        btnplay.firstElementChild.style.transform = "translateY(-50%)"
        } else {
            btnplay.style.boxShadow = '-1px 0px 5px black, inset 0px 1px 0px rgba(5, 146, 146, 0.3), inset 0px 0px 3px rgba(5, 146, 146, 0.5)'
            btnplay.style.border = '1px solid white'
            btnplay.firstElementChild.style.transform = "translateY(-50%)"
        }
})


// Touch Images Press Effect 

catboxArray.forEach(e => {
    e.addEventListener('touchstart', () => {
        e.style.boxShadow = '5px 5px 5px #000000'
        if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary") {
            e.style.marginTop = '0.05rem'
        } else {
            e.style.marginTop = '0.1rem'
        }
    })
})

catboxArray.forEach(e => {
    e.addEventListener('touchend', () => {
        e.style.boxShadow = '5px 5px 10px #000000'
        if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary") {
            e.style.marginTop = "0"
        } else {
            e.style.marginTop = "0"
        }
    })
})

pgimgwrappArray.forEach(element => {
    element.addEventListener('touchstart', function() {
        element.style.boxShadow = '5px 5px 5px #000000'
        if (orientation === "landscape-primary" || orientation === "landscape-secondary") {
            element.style.marginTop = '0.05rem'
        } else {
            element.style.marginTop = '0.1rem'
        }
    })
})

pgimgwrappArray.forEach(element => {
    element.addEventListener('touchend', function() {
        element.style.boxShadow = '5px 5px 10px #000000'
        element.style.marginTop = '0'
    })
})



/// Edit Category Images ///


// Double Tap Quick Edit Camera

// for (let i=0; i<imgcatarray.length; i++) {
//     let k = i + 1
//     imgcatarray[i].addEventListener('dbltap', () => {

//     // Define Utils

//     var imgcatparent = imgcatarray[i].parentElement

//     // Sound

//         // Move Sound Local
//         function captureSuccess(mediaFiles) {
//             var i, path, len;
//             for (i = 0, len = mediaFiles.length; i < len; i += 1) {
//                 path = mediaFiles[i].fullPath;
//                 moveSound(path)
//             }
            
//         }   
//         function moveSound(file) {
//             window.resolveLocalFileSystemURI(file, resolveOnSoundSuccess, resOnSoundError)
//         }
//         function resolveOnSoundSuccess(entry) {
//             var d = new Date();
//             var n = d.getTime();
//             //new file name
//             var newFileName = n + ".mp3";
//             var mySoundFolderApp = 'MyAppSoundFolder';
//             window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
//             //The folder is created if doesn't exist
//             fileSys.root.getDirectory( mySoundFolderApp,
//                             {create:true, exclusive: false},
//                             function(directory) {
//                                 entry.moveTo(directory, newFileName,  successSoundMove, resOnSound1Error);
//                             },
//                             resOnSound2Error);
//                             }
            
//             , resOnSound3Error);
//         }
//         // Update Database with Sound for Cat Images
//             function successSoundMove(entry) {
//                 localStorage.setItem('soundpath', entry.toURL())
//                 var _sound = localStorage.getItem('soundpath')
//                 console.log("k = " +k)
//                 db.transaction(function(tx) {
//                     tx.executeSql("UPDATE cattable SET sound = "+ "'"+_sound +"'"+" WHERE id = "+ k);
//                 }, function(error) {
//                     console.log('Update Sound cat ERROR: ' + error.message + error.code);
//                 }, function() {
//                     console.log('Update Sound cat OK');
//                     }
//                 )

//                 db.transaction(function(tx) {
//                     tx.executeSql("SELECT sound FROM cattable WHERE id = " + k, [], function(tx, rs) {
//                         var len = rs.rows.length;
//                         console.log(len + " rows found.");
//                         imgcatparent.nextElementSibling.src = rs.rows.item(0).sound
//                     }, function(tx, error) {
//                     console.log('SELECT Sound cat error: ' + error.message);
//                     })
//                 })
//             }

//             var captureError = function(error) {
//                 navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
//             };
//             function resOnSound1Error (er) {
//                 alert('error1 sound file is '+er.message)
//             }
//             function resOnSound2Error (er) {
//                 alert('error2 sound file is '+er.message)
//             }
//             function resOnSound3Error (er) {
//                 alert('error3 sound file is '+er.message)
//             }
//             function resOnSoundError (er) {
//                 alert('error sound file is '+er.message)
//             }


//     // Description

//         // Update Databse with Description for Cat Images
//         function successTextMove(entry) {
//             localStorage.setItem('textpath', entry)
//             var _description = localStorage.getItem('textpath')
//             console.log("k = " +k)
//             db.transaction(function(tx) {
//                 tx.executeSql("UPDATE cattable SET description = "+ "'"+_description +"'"+" WHERE id = "+ k);
                
//             }, function(error) {
//                 console.log('Update description cat ERROR: ' + error.message + error.code);
//             }, function() {
//                 console.log('Update description cat OK');
//                 }
//             )

//             db.transaction(function(tx) {
//                 tx.executeSql("SELECT description FROM cattable WHERE id = " + k, [], function(tx, rs) {
//                     var len = rs.rows.length;
//                     console.log(len + " rows found.");
//                     imgcatparent.firstElementChild.innerHTML = rs.rows.item(0).description
//                 }, function(tx, error) {
//                 console.log('SELECT description cat error: ' + error.message);
//                 })
//             })
//         }
// /////////

//         // capture photo
//         navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
//             destinationType: Camera.DestinationType.FILE_URI,
//         });   

//         function onPhotoDataSuccess(imageURI) {
//             movePic(imageURI)
//         }
//         function onFail(message) {
//             alert('failed '+message)
//         }
//         function movePic(file) {
//             window.resolveLocalFileSystemURI(file, resolveOnSuccess, resOnError)
//         }
//         // Callback function when the file system uri has been resolved
//         function resolveOnSuccess(entry){ 
//             console.log(entry)
//             var d = new Date();
//             var n = d.getTime();
//             //new file name
//             var newFileName = n + ".jpg";
//             var myFolderApp = 'MyAppFolder';
//             window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
//             //The folder is created if doesn't exist
//             fileSys.root.getDirectory( myFolderApp,
//                             {create:true, exclusive: false},
//                             function(directory) {
//                                 entry.moveTo(directory, newFileName,  successMove, resOnError);
//                             },
//                             resOnError);
//                             }
            
//             , resOnError);
//         }
//         function successMove(entry) {
//             // Update Database with Image from Camera
//             localStorage.setItem('imagepath', entry.toURL())
//             var _image = localStorage.getItem('imagepath')
//             console.log("k = " +k)
//             db.transaction(function(tx) {
//                 tx.executeSql("UPDATE cattable SET image = "+ "'"+_image +"'"+" WHERE id = "+ k);
//             }, function(error) {
//                 console.log('Update cat ERROR: ' + error.message + error.code);
//             }, function() {
//                 console.log('Update cat OK');
//                 }
//             )

//             db.transaction(function(tx) {
//                 tx.executeSql("SELECT image FROM cattable WHERE id = " + k, [], function(tx, rs) {
//                     var len = rs.rows.length;
//                     console.log(len + " rows found.");
//                     imgcatarray[i].src = rs.rows.item(0).image
//                 }, function(tx, error) {
//                 console.log('SELECT error: ' + error.message);
//                 })
//             })

//             // capture sound
//             navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});

//             // blur background
//             blurBackground()

//             // Create Text Submit PopUp
//             var userInput = document.createElement('input')
//             userInput.setAttribute('type', 'text')
//             userInput.setAttribute('autofocus', true)
//             userInput.classList.add('inputclass')
//             wrapper.appendChild(userInput)
//             var submitButton = document.createElement('button')
//             submitButton.classList.add('submitclass')
//             submitButton.innerHTML = 'Submit'
//             wrapper.appendChild(submitButton)
//             exit.classList.add('submitexit')

//             // Submit Button
//             submitButton.addEventListener('tap', () => {
//                 successTextMove(userInput.value)
//                 wrapper.removeChild(userInput)
//                 wrapper.removeChild(submitButton)
//                 wrapper.removeChild(exit)
//                 removeBlur()
//             })
//             // Kill PopUp
//             exit.addEventListener('tap', () => {
//                 wrapper.removeChild(userInput)
//                 wrapper.removeChild(submitButton)
//                 wrapper.removeChild(exit)
//                 removeBlur()
//             }) 
//         }
//         function resOnError (er) {
//             alert('error file is '+er.message)
//         }
//     })
// }


// Long Tap Menu Edit

for (let i=0; i<imgcatarray.length; i++) {
        let k = i + 1
        imgcatarray[i].addEventListener('longtap', () => {

    // Define Utils
    var imgcatparent = imgcatarray[i].parentElement

        // Sound

            // Move Sound Local
            function captureSuccess(mediaFiles) {
                var i, path, len;
                for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                    path = mediaFiles[i].fullPath;
                    moveSound(path)
                }
                
            }   
            function moveSound(file) {
                window.resolveLocalFileSystemURI(file, resolveOnSoundSuccess, resOnSoundError)
            }
            function resolveOnSoundSuccess(entry) {
                var d = new Date();
                var n = d.getTime();
                //new file name
                var newFileName = n + ".mp3";
                var mySoundFolderApp = 'MyAppSoundFolder';
                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
                //The folder is created if doesn't exist
                fileSys.root.getDirectory( mySoundFolderApp,
                                {create:true, exclusive: false},
                                function(directory) {
                                    entry.moveTo(directory, newFileName,  successSoundMove, resOnSound1Error);
                                },
                                resOnSound2Error);
                                }
                
                , resOnSound3Error);
            }

            // Update Database with Sound for Cat Images
            function successSoundMove(entry) {
                localStorage.setItem('soundpath', entry.toURL())
                var _sound = localStorage.getItem('soundpath')
                console.log("k = " +k)
                db.transaction(function(tx) {
                    tx.executeSql("UPDATE cattable SET sound = "+ "'"+_sound +"'"+" WHERE id = "+ k);
                }, function(error) {
                    console.log('Update Sound cat ERROR: ' + error.message + error.code);
                }, function() {
                    console.log('Update Sound cat OK');
                    }
                )

                db.transaction(function(tx) {
                    tx.executeSql("SELECT sound FROM cattable WHERE id = " + k, [], function(tx, rs) {
                        var len = rs.rows.length;
                        console.log(len + " rows found.");
                        imgcatparent.nextElementSibling.src = rs.rows.item(0).sound
                    }, function(tx, error) {
                    console.log('SELECT Sound cat error: ' + error.message);
                    })
                })
            }

            var captureError = function(error) {
                navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
            };
            function resOnSound1Error (er) {
                alert('error1 sound file is '+er.message)
            }
            function resOnSound2Error (er) {
                alert('error2 sound file is '+er.message)
            }
            function resOnSound3Error (er) {
                alert('error3 sound file is '+er.message)
            }
            function resOnSoundError (er) {
                alert('error sound file is '+er.message)
            }

    // Description

        // Update Databse with Description for Cat Images
        function successTextMove(entry) {
            localStorage.setItem('textpath', entry)
            var _description = localStorage.getItem('textpath')
            console.log("k = " +k)
            db.transaction(function(tx) {
                tx.executeSql("UPDATE cattable SET description = "+ "'"+_description +"'"+" WHERE id = "+ k);
            }, function(error) {
                console.log('Update description cat ERROR: ' + error.message + error.code);
            }, function() {
                console.log('Update description cat OK');
                }
            )

            db.transaction(function(tx) {
                tx.executeSql("SELECT description FROM cattable WHERE id = " + k, [], function(tx, rs) {
                    var len = rs.rows.length;
                    console.log(len + " rows found.");
                    imgcatparent.firstElementChild.innerHTML = rs.rows.item(0).description
                }, function(tx, error) {
                console.log('SELECT description cat error: ' + error.message);
                })
            })
        }
////////

    // Create Menu PopUp
    var initial1 = document.createElement('button')
    initial1.classList.add('trans1off')
    var menutext1 =  document.createElement('span')
    menutext1.classList.add('txtpageimage')
    menutext1.innerHTML = 'Edit Text'
    var menuimg1 = document.createElement('img')
    menuimg1.classList.add('imageclmenu')
    menuimg1.src = 'img/write.png'
    wrapper.appendChild(initial1)
    initial1.appendChild(menutext1)
    initial1.appendChild(menuimg1)

    var initial2 = document.createElement('button')
    initial2.classList.add('trans2off')
    var menutext2 =  document.createElement('span')
    menutext2.classList.add('txtpageimage')
    menutext2.innerHTML = 'Edit Photo'
    var menuimg2 = document.createElement('img')
    menuimg2.classList.add('imageclmenu')
    menuimg2.src = 'img/scenery.png'
    wrapper.appendChild(initial2)
    initial2.appendChild(menutext2)
    initial2.appendChild(menuimg2)

    var initial3 = document.createElement('button')
    initial3.classList.add('trans3off')
    var menutext3 =  document.createElement('span')
    menutext3.classList.add('txtpageimage')
    menutext3.innerHTML = 'Edit Sound'
    var menuimg3 = document.createElement('img')
    menuimg3.classList.add('imageclmenu')
    menuimg3.src = 'img/voice.png'
    wrapper.appendChild(initial3)
    initial3.appendChild(menutext3)
    initial3.appendChild(menuimg3)

    var exit = document.createElement('button')
    exit.classList.add('exitoff')
    exit.innerText = 'x'
    wrapper.appendChild(exit)   

    // Blur Background
    blurBackground()

    // Kill PopUp 
    exit.addEventListener('tap', () => {
        wrapper.removeChild(initial1)
        wrapper.removeChild(initial2)
        wrapper.removeChild(initial3)
        wrapper.removeChild(exit)
        removeBlur()
    })

    setTimeout(() => {
        initial1.classList.remove('trans1off')
        initial1.classList.add('trans1on')
        initial2.classList.remove('trans2off')
        initial2.classList.add('trans2on')
        initial3.classList.remove('trans3off')
        initial3.classList.add('trans3on')
        exit.classList.remove('exitoff')
        exit.classList.add('exiton')
    }, 100);
    
/////// Edit Text
        initial1.addEventListener('tap', () => {
            wrapper.removeChild(initial1)
            wrapper.removeChild(initial2)
            wrapper.removeChild(initial3)
        
            // Blur Background
            blurBackground()

            // Create Text Submit PopUp
            var userInput = document.createElement('input')
            userInput.setAttribute('type', 'text')
            userInput.autofocus = true
            userInput.setAttribute('placeholder', 'touch here to start typing')
            userInput.classList.add('trans1off')
            wrapper.appendChild(userInput)
            var submitButton = document.createElement('button')
            submitButton.classList.add('trans2off')
            submitButton.innerHTML = 'Submit'
            wrapper.appendChild(submitButton)

            setTimeout(() => {
                userInput.classList.remove('trans1off')
                userInput.classList.add('inputclass')
                submitButton.classList.remove('trans2off')
                submitButton.classList.add('submitclass')
                exit.classList.remove('exiton')
                exit.classList.add('submitexit')
            }, 100);

            // Submit Button
            submitButton.addEventListener('tap', () => {
                successTextMove(userInput.value)
                wrapper.removeChild(userInput)
                wrapper.removeChild(submitButton)
                wrapper.removeChild(exit)
                removeBlur()
            })
            // Kill PopUp
            exit.addEventListener('tap', () => {
                wrapper.removeChild(userInput)
                wrapper.removeChild(submitButton)
                wrapper.removeChild(exit)
                removeBlur()
            })
        })

/////// Edit Sound
        initial3.addEventListener('tap', () => {
            navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
            wrapper.removeChild(initial1)
            wrapper.removeChild(initial2)
            wrapper.removeChild(initial3)
            wrapper.removeChild(exit)
            removeBlur()
        })
        
/////// Edit Image
        initial2.addEventListener('tap', () => {
            wrapper.removeChild(initial1)
            wrapper.removeChild(initial2)
            wrapper.removeChild(initial3)

            // Create Camera/Gallery Select PopUp
            var choice1 = document.createElement('button')
            choice1.classList.add('trans1off')
            var imgmenutext1 =  document.createElement('span')
            imgmenutext1.classList.add('txtpageimage')
            imgmenutext1.innerHTML = 'Camera'
            var imgmenuimg1 = document.createElement('img')
            imgmenuimg1.classList.add('imageclmenu')
            imgmenuimg1.src = 'img/phonepic.png'
            wrapper.appendChild(choice1)
            choice1.appendChild(imgmenutext1)
            choice1.appendChild(imgmenuimg1)

            var choice2 = document.createElement('button')
            choice2.classList.add('trans2off')
            var imgmenutext2 =  document.createElement('span')
            imgmenutext2.classList.add('txtpageimage')
            imgmenutext2.innerHTML = 'Gallery'
            var imgmenuimg2 = document.createElement('img')
            imgmenuimg2.classList.add('imageclmenu')
            imgmenuimg2.src = 'img/gallery.png'
            wrapper.appendChild(choice2)
            choice2.appendChild(imgmenutext2)
            choice2.appendChild(imgmenuimg2)

            // var exit1 = document.createElement('button')
            // exit1.classList.add('exitoff')
            // exit1.innerText = 'x'
            // wrapper.appendChild(exit1)

            setTimeout(() => {
                choice1.classList.remove('trans1off')
                choice1.classList.add('trans1on')
                choice2.classList.remove('trans2off')
                choice2.classList.add('trans2on')
                exit.classList.remove('exitoff')
                exit.classList.add('exitonmiddle')
            }, 100);

            // Kill PopUp 
            exit.addEventListener('tap', () => {
               wrapper.removeChild(choice1)
               wrapper.removeChild(choice2)
               wrapper.removeChild(exit)
               removeBlur()
            })

            // Blur Background
            blurBackground()


            // Device Camera

            choice1.addEventListener('tap', () => {
                    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
                        destinationType: Camera.DestinationType.FILE_URI,
                        });   
            })
                function onPhotoDataSuccess(imageURI) {
                    movePic(imageURI)
                }
                function onFail(message) {
                    alert('failed '+message)
                }
                function movePic(file) {
                    window.resolveLocalFileSystemURI(file, resolveOnSuccess, resOnError)
                }
               // Callback function when the file system uri has been resolved
                        function resolveOnSuccess(entry){ 
                            console.log(entry)
                            var d = new Date();
                            var n = d.getTime();
                            //new file name
                            var newFileName = n + ".jpg";
                            var myFolderApp = 'MyAppFolder';
                            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
                            //The folder is created if doesn't exist
                            fileSys.root.getDirectory( myFolderApp,
                                            {create:true, exclusive: false},
                                            function(directory) {
                                                entry.moveTo(directory, newFileName,  successMove, resOnError);
                                            },
                                            resOnError);
                                            }
                            
                            , resOnError);
                        }
                        function successMove(entry) {
                            // Update Database with Image from Camera
                            localStorage.setItem('imagepath', entry.toURL())
                            var _image = localStorage.getItem('imagepath')
                            console.log("k = " +k)
                            db.transaction(function(tx) {
                                tx.executeSql("UPDATE cattable SET image = "+ "'"+_image +"'"+" WHERE id = "+ k);
                              }, function(error) {
                                console.log('Update cat ERROR: ' + error.message + error.code);
                              }, function() {
                                console.log('Update cat OK');
                                }
                            )

                            db.transaction(function(tx) {
                                tx.executeSql("SELECT image FROM cattable WHERE id = " + k, [], function(tx, rs) {
                                    var len = rs.rows.length;
                                    console.log(len + " rows found.");
                                    imgcatarray[i].src = rs.rows.item(0).image
                                }, function(tx, error) {
                                  console.log('SELECT error: ' + error.message);
                                })
                            })

                            wrapper.removeChild(exit)
                            wrapper.removeChild(choice1)
                            wrapper.removeChild(choice2)
                            removeBlur()
                        }

                        function resOnError (er) {
                            alert('error file is '+er.message)
                        }


            // Device Library

            choice2.addEventListener('tap', () => { 
                    navigator.camera.getPicture(onPhotoLibSuccess, onLibFail, { quality: 50,
                        destinationType: Camera.DestinationType.FILE_URI,
                        sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
                    });
                    wrapper.removeChild(exit)
                    wrapper.removeChild(choice1)
                    wrapper.removeChild(choice2)
                    removeBlur()
            })
                function onPhotoLibSuccess(imageUri) {
                    movePicLib(imageUri)
                    
                }
                function onLibFail(error) {
                    alert('from lib ' + error.message)
            
                }
                function movePicLib(file) {
                    window.resolveLocalFileSystemURI(file, resolveOnLibSuccess, resOnLib1Error)
                }
                function resolveOnLibSuccess(entry){ 
                    var d = new Date();
                    var n = d.getTime();
                    //new file name
                    var newFileName = n + ".png";
                    var myFolderLibApp = 'MyAppFolderLib';
                    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
                    //The folder is created if doesn't exist
                    fileSys.root.getDirectory( myFolderLibApp,
                                    {create:true, exclusive: false},
                                    function(directory) {
                                        entry.moveTo(directory, newFileName,  successLibMove, resOnLib2Error);
                                    },
                                    resOnLib3Error);
                                    }
                    
                    , resOnLib4Error);
                }
                function successLibMove(entry) {
                    // Update Database with Image from Library
                    localStorage.setItem('imagepath', entry.toURL())
                    var _imagelib = localStorage.getItem('imagepath')
                    console.log("k = " +k)
                    db.transaction(function(tx) {
                        tx.executeSql("UPDATE cattable SET image = "+ "'"+_imagelib +"'"+" WHERE id = "+ k);
                      }, function(error) {
                        console.log('Update cat ERROR: ' + error.message + error.code);
                      }, function() {
                        console.log('Update cat OK');
                        }
                    )

                    db.transaction(function(tx) {
                        tx.executeSql("SELECT image FROM cattable WHERE id = " + k, [], function(tx, rs) {
                            var len = rs.rows.length;
                            console.log(len + " rows found.");
                            imgcatarray[i].src = rs.rows.item(0).image
                        }, function(tx, error) {
                          console.log('SELECT error: ' + error.message);
                        })
                    })
                }

                function resOnLib1Error (er) {
                    alert('error1 lib file is '+er.message)
                }
                function resOnLib2Error (er) {
                    alert('error2 lib file is '+er.message)
                }
                function resOnLib3Error (er) {
                    alert('error3 lib file is '+er.message)
                }
                function resOnLib4Error (er) {
                    alert('error3 lib file is '+er.message)
                }
                
   
        })
    })
}

/////////////////////////////////////////////////////////////////    


/// Edit Main Images ///


// Double Tap Quick Edit Camera

// for (let i=0; i<imgarray.length; i++) {
//     let k = i + 1
//     imgarray[i].addEventListener('dbltap', () => {

//     // Define Utils

//         // Sound

//             // Move Sound Local
//             function captureSuccess(mediaFiles) {
//                 var i, path, len;
//                 for (i = 0, len = mediaFiles.length; i < len; i += 1) {
//                     path = mediaFiles[i].fullPath;
//                     moveSound(path)
//                 }  
//             }   
//             function moveSound(file) {
//                 window.resolveLocalFileSystemURI(file, resolveOnSoundSuccess, resOnSoundError)
//             }
//             function resolveOnSoundSuccess(entry) {
//                 var d = new Date();
//                 var n = d.getTime();
//                 //new file name
//                 var newFileName = n + ".mp3";
//                 var mySoundFolderApp = 'MyAppSoundFolder';
//                 window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
//                 //The folder is created if doesn't exist
//                 fileSys.root.getDirectory( mySoundFolderApp,
//                                 {create:true, exclusive: false},
//                                 function(directory) {
//                                     entry.moveTo(directory, newFileName,  successSoundMove, resOnSound1Error);
//                                 },
//                                 resOnSound2Error);
//                                 }
                
//                 , resOnSound3Error);
//             }

//             // Update Database with Sound for Page Images
//             function successSoundMove(entry) {
//                 localStorage.setItem('soundpath', entry.toURL())
//                 var _sound = localStorage.getItem('soundpath')
//                 console.log("k = " +k)
//                 db.transaction(function(tx) {
//                     tx.executeSql("UPDATE maintable SET sound = "+ "'"+_sound +"'"+" WHERE id = "+ k);
//                 }, function(error) {
//                     console.log('Update Sound ERROR: ' + error.message + error.code);
//                 }, function() {
//                     console.log('Update Sound OK');
//                     }
//                 )

//                 db.transaction(function(tx) {
//                     tx.executeSql("SELECT sound FROM maintable WHERE id = " + k, [], function(tx, rs) {
//                         var len = rs.rows.length;
//                         console.log(len + " rows found.");
//                         imgarray[i].nextElementSibling.src = rs.rows.item(0).sound
//                     }, function(tx, error) {
//                     console.log('SELECT Sound error: ' + error.message);
//                     })
//                 })
//             }

//             var captureError = function(error) {
//                 navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
//             };
//             function resOnSound1Error (er) {
//                 alert('error1 sound file is '+er.message)
//             }
//             function resOnSound2Error (er) {
//                 alert('error2 sound file is '+er.message)
//             }
//             function resOnSound3Error (er) {
//                 alert('error3 sound file is '+er.message)
//             }
//             function resOnSoundError (er) {
//                 alert('error sound file is '+er.message)
//             }


//     // Description

//         var imgparent = imgarray[i].parentElement

//         // Update Databse with Description for Page Images
//         function successTextMove(entry) {
//             localStorage.setItem('textpath', entry)
//             var _description = localStorage.getItem('textpath')
//             console.log("k = " +k)
//             db.transaction(function(tx) {
//                 tx.executeSql("UPDATE maintable SET description = "+ "'"+_description +"'"+" WHERE id = "+ k);
//             }, function(error) {
//                 console.log('Update description ERROR: ' + error.message + error.code);
//             }, function() {
//                 console.log('Update description OK');
//                 }
//             )

//             db.transaction(function(tx) {
//                 tx.executeSql("SELECT description FROM maintable WHERE id = " + k, [], function(tx, rs) {
//                     var len = rs.rows.length;
//                     console.log(len + " rows found.");
//                     imgparent.firstElementChild.innerHTML = rs.rows.item(0).description
//                 }, function(tx, error) {
//                 console.log('SELECT description error: ' + error.message);
//                 })
//             })
//         }
// ////////

//     // capture photo
//     navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
//         destinationType: Camera.DestinationType.FILE_URI,
//     })
//         function onPhotoDataSuccess(imageURI) {
//             movePic(imageURI)
//         }
//             function onFail(message) {
//         alert('failed '+message)
//         }
//             function movePic(file) {
//         window.resolveLocalFileSystemURI(file, resolveOnSuccess, resOnError)
//         }
//         // Callback function when the file system uri has been resolved
//         function resolveOnSuccess(entry){ 
//             console.log(entry)
//             var d = new Date();
//             var n = d.getTime();
//             //new file name
//             var newFileName = n + ".jpg";
//             var myFolderApp = 'MyAppFolder';
//             window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
//             //The folder is created if doesn't exist
//             fileSys.root.getDirectory( myFolderApp,
//                             {create:true, exclusive: false},
//                             function(directory) {
//                                 entry.moveTo(directory, newFileName,  successMove, resOnError);
//                             },
//                             resOnError);
//                             }
            
//             , resOnError);
//         }
//         function successMove(entry) {
//             // Update Database with Image from Camera
//             localStorage.setItem('imagepath', entry.toURL())
//             var _image = localStorage.getItem('imagepath')
//             console.log("k = " +k)
//             db.transaction(function(tx) {
//                 tx.executeSql("UPDATE maintable SET image = "+ "'"+_image +"'"+" WHERE id = "+ k);
//             }, function(error) {
//                 console.log('Update ERROR: ' + error.message + error.code);
//             }, function() {
//                 console.log('Update OK');
//                 }
//             )

//             db.transaction(function(tx) {
//                 tx.executeSql("SELECT image FROM maintable WHERE id = " + k, [], function(tx, rs) {
//                     var len = rs.rows.length;
//                     console.log(len + " rows found.");
//                     imgarray[i].src = rs.rows.item(0).image
//                 }, function(tx, error) {
//                 console.log('SELECT error: ' + error.message);
//                 })
//             })

//             // capture sound
//             navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});

//             // Blur Background
//             blurBackground()

//             // Create Submit Text Menu
//             var userInput = document.createElement('input')
//             userInput.setAttribute('type', 'text')
//             userInput.setAttribute('autofocus', true)
//             userInput.classList.add('inputclass')
//             wrapper.appendChild(userInput)
//             var submitButton = document.createElement('button')
//             submitButton.classList.add('submitclass')
//             submitButton.innerHTML = 'Submit'
//             wrapper.appendChild(submitButton)
//             exit.classList.add('submitexit')

//             // Submit Button
//             submitButton.addEventListener('tap', () => {
//                 successTextMove(userInput.value)
//                 wrapper.removeChild(userInput)
//                 wrapper.removeChild(submitButton)
//                 wrapper.removeChild(exit)
//                 removeBlur()
//             })
//             // Kill PopUp
//             exit.addEventListener('tap', () => {
//                 wrapper.removeChild(userInput)
//                 wrapper.removeChild(submitButton)
//                 wrapper.removeChild(exit)
//                 removeBlur()
//             })
//         }
//         function resOnError (er) {
//             alert('error file is '+er.message)
//         }
//     })
// }


// Long Tap Menu Edit   

for (let i=0; i<imgarray.length; i++) {
        let k = i + 1
        imgarray[i].addEventListener('longtap', () => {


    // Define Utils

        // Sound

            // Move Sound Local
            function captureSuccess(mediaFiles) {
                var i, path, len;
                for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                    path = mediaFiles[i].fullPath;
                    moveSound(path)
                }  
            }   
            function moveSound(file) {
                window.resolveLocalFileSystemURI(file, resolveOnSoundSuccess, resOnSoundError)
            }
            function resolveOnSoundSuccess(entry) {
                var d = new Date();
                var n = d.getTime();
                //new file name
                var newFileName = n + ".mp3";
                var mySoundFolderApp = 'MyAppSoundFolder';
                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
                //The folder is created if doesn't exist
                fileSys.root.getDirectory( mySoundFolderApp,
                                {create:true, exclusive: false},
                                function(directory) {
                                    entry.moveTo(directory, newFileName,  successSoundMove, resOnSound1Error);
                                },
                                resOnSound2Error);
                                }
                
                , resOnSound3Error);
            }

            // Update Database with Sound for Page Images
            function successSoundMove(entry) {
                localStorage.setItem('soundpath', entry.toURL())
                var _sound = localStorage.getItem('soundpath')
                console.log("k = " +k)
                db.transaction(function(tx) {
                    tx.executeSql("UPDATE maintable SET sound = "+ "'"+_sound +"'"+" WHERE id = "+ k);
                }, function(error) {
                    console.log('Update Sound ERROR: ' + error.message + error.code);
                }, function() {
                    console.log('Update Sound OK');
                    }
                )

                db.transaction(function(tx) {
                    tx.executeSql("SELECT sound FROM maintable WHERE id = " + k, [], function(tx, rs) {
                        var len = rs.rows.length;
                        console.log(len + " rows found.");
                        imgarray[i].nextElementSibling.src = rs.rows.item(0).sound
                    }, function(tx, error) {
                    console.log('SELECT Sound error: ' + error.message);
                    })
                })
            }

            var captureError = function(error) {
                navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
            };
            function resOnSound1Error (er) {
                alert('error1 sound file is '+er.message)
            }
            function resOnSound2Error (er) {
                alert('error2 sound file is '+er.message)
            }
            function resOnSound3Error (er) {
                alert('error3 sound file is '+er.message)
            }
            function resOnSoundError (er) {
                alert('error sound file is '+er.message)
            }


    // Description

        var imgparent = imgarray[i].parentElement

        // Update Databse with Description for Page Images
        function successTextMove(entry) {
            localStorage.setItem('textpath', entry)
            var _description = localStorage.getItem('textpath')
            console.log("k = " +k)
            db.transaction(function(tx) {
                tx.executeSql("UPDATE maintable SET description = "+ "'"+_description +"'"+" WHERE id = "+ k);
            }, function(error) {
                console.log('Update description ERROR: ' + error.message + error.code);
            }, function() {
                console.log('Update description OK');
                }
            )

            db.transaction(function(tx) {
                tx.executeSql("SELECT description FROM maintable WHERE id = " + k, [], function(tx, rs) {
                    var len = rs.rows.length;
                    console.log(len + " rows found.");
                    imgparent.firstElementChild.innerHTML = rs.rows.item(0).description
                }, function(tx, error) {
                console.log('SELECT description error: ' + error.message);
                })
            })
        }

/////////

    // Create Initial Menu PopUp
    var initial1 = document.createElement('button')
    initial1.classList.add('trans1off')
    var menutext1 =  document.createElement('span')
    menutext1.classList.add('txtpageimage')
    menutext1.innerHTML = 'Edit Text'
    var menuimg1 = document.createElement('img')
    menuimg1.classList.add('imageclmenu')
    menuimg1.src = 'img/write.png'
    wrapper.appendChild(initial1)
    initial1.appendChild(menutext1)
    initial1.appendChild(menuimg1)

    var initial2 = document.createElement('button')
    initial2.classList.add('trans2off')
    var menutext2 =  document.createElement('span')
    menutext2.classList.add('txtpageimage')
    menutext2.innerHTML = 'Edit Photo'
    var menuimg2 = document.createElement('img')
    menuimg2.classList.add('imageclmenu')
    menuimg2.src = 'img/scenery.png'
    wrapper.appendChild(initial2)
    initial2.appendChild(menutext2)
    initial2.appendChild(menuimg2)

    var initial3 = document.createElement('button')
    initial3.classList.add('trans3off')
    var menutext3 =  document.createElement('span')
    menutext3.classList.add('txtpageimage')
    menutext3.innerHTML = 'Edit Sound'
    var menuimg3 = document.createElement('img')
    menuimg3.classList.add('imageclmenu')
    menuimg3.src = 'img/voice.png'
    wrapper.appendChild(initial3)
    initial3.appendChild(menutext3)
    initial3.appendChild(menuimg3)

    var exit = document.createElement('button')
    exit.classList.add('exitoff')
    exit.innerText = 'x'
    wrapper.appendChild(exit)   

    // Blur Background
    blurBackground()

    // Kill PopUp 
    exit.addEventListener('tap', () => {
        wrapper.removeChild(initial1)
        wrapper.removeChild(initial2)
        wrapper.removeChild(initial3)
        wrapper.removeChild(exit)
        removeBlur()
    })

    setTimeout(() => {
        initial1.classList.remove('trans1off')
        initial1.classList.add('trans1on')
        initial2.classList.remove('trans2off')
        initial2.classList.add('trans2on')
        initial3.classList.remove('trans3off')
        initial3.classList.add('trans3on')
        exit.classList.remove('exitoff')
        exit.classList.add('exiton')
    }, 100);
    
/////// Edit Text
        initial1.addEventListener('tap', () => {
            wrapper.removeChild(initial1)
            wrapper.removeChild(initial2)
            wrapper.removeChild(initial3)
        
            // Blur Background
            blurBackground()

            // Create Submit Menu
            var userInput = document.createElement('input')
            userInput.setAttribute('type', 'text')
            userInput.autofocus = true
            userInput.setAttribute('placeholder', 'touch here to start typing')
            userInput.classList.add('trans1off')
            wrapper.appendChild(userInput)
            var submitButton = document.createElement('button')
            submitButton.classList.add('trans2off')
            submitButton.innerHTML = 'Submit'
            wrapper.appendChild(submitButton)
            

            setTimeout(() => {
                userInput.classList.remove('trans1off')
                userInput.classList.add('inputclass')
                submitButton.classList.remove('trans2off')
                submitButton.classList.add('submitclass')
                exit.classList.remove('exiton')
                exit.classList.add('submitexit')
            }, 100);

            // Submit Button
            submitButton.addEventListener('tap', () => {
                successTextMove(userInput.value)
                wrapper.removeChild(userInput)
                wrapper.removeChild(submitButton)
                wrapper.removeChild(exit)
                removeBlur()
            })
            // Kill PopUp
            exit.addEventListener('tap', () => {
                wrapper.removeChild(userInput)
                wrapper.removeChild(submitButton)
                wrapper.removeChild(exit)
                removeBlur()
            })
        })

/////// Edit Sound
        initial3.addEventListener('tap', () => {
            navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
            wrapper.removeChild(initial1)
            wrapper.removeChild(initial2)
            wrapper.removeChild(initial3)
            wrapper.removeChild(exit)
            removeBlur()
        })
        
/////// Edit Image
        initial2.addEventListener('tap', () => {
            wrapper.removeChild(initial1)
            wrapper.removeChild(initial2)
            wrapper.removeChild(initial3)

            // Create Camera Gallery Select PopUp
            var choice1 = document.createElement('button')
            choice1.classList.add('trans1off')
            var imgmenutext1 =  document.createElement('span')
            imgmenutext1.classList.add('txtpageimage')
            imgmenutext1.innerHTML = 'Camera'
            var imgmenuimg1 = document.createElement('img')
            imgmenuimg1.classList.add('imageclmenu')
            imgmenuimg1.src = 'img/phonepic.png'
            wrapper.appendChild(choice1)
            choice1.appendChild(imgmenutext1)
            choice1.appendChild(imgmenuimg1)

            var choice2 = document.createElement('button')
            choice2.classList.add('trans2off')
            var imgmenutext2 =  document.createElement('span')
            imgmenutext2.classList.add('txtpageimage')
            imgmenutext2.innerHTML = 'Gallery'
            var imgmenuimg2 = document.createElement('img')
            imgmenuimg2.classList.add('imageclmenu')
            imgmenuimg2.src = 'img/gallery.png'
            wrapper.appendChild(choice2)
            choice2.appendChild(imgmenutext2)
            choice2.appendChild(imgmenuimg2)


            setTimeout(() => {
                choice1.classList.remove('trans1off')
                choice1.classList.add('trans1on')
                choice2.classList.remove('trans2off')
                choice2.classList.add('trans2on')
                exit.classList.remove('exitoff')
                exit.classList.add('exitonmiddle')
            }, 100);

            // Kill PopUp 
            exit.addEventListener('tap', () => {
               wrapper.removeChild(choice1)
               wrapper.removeChild(choice2)
               wrapper.removeChild(exit)
               removeBlur()
            })

            // Blur Background
            blurBackground()


            // Device Camera

            choice1.addEventListener('tap', () => {
                    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
                        destinationType: Camera.DestinationType.FILE_URI,
                        });   
            })
                function onPhotoDataSuccess(imageURI) {
                    movePic(imageURI)
                }
                function onFail(message) {
                    alert('failed '+message)
                }
                function movePic(file) {
                    window.resolveLocalFileSystemURI(file, resolveOnSuccess, resOnError)
                }
               // Callback function when the file system uri has been resolved
                        function resolveOnSuccess(entry){ 
                            console.log(entry)
                            var d = new Date();
                            var n = d.getTime();
                            //new file name
                            var newFileName = n + ".jpg";
                            var myFolderApp = 'MyAppFolder';
                            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
                            //The folder is created if doesn't exist
                            fileSys.root.getDirectory( myFolderApp,
                                            {create:true, exclusive: false},
                                            function(directory) {
                                                entry.moveTo(directory, newFileName,  successMove, resOnError);
                                            },
                                            resOnError);
                                            }
                            
                            , resOnError);
                        }
                        function successMove(entry) {
                            // Update Database with Image from Camera
                            localStorage.setItem('imagepath', entry.toURL())
                            var _image = localStorage.getItem('imagepath')
                            console.log("k = " +k)
                            db.transaction(function(tx) {
                                tx.executeSql("UPDATE maintable SET image = "+ "'"+_image +"'"+" WHERE id = "+ k);
                              }, function(error) {
                                console.log('Update ERROR: ' + error.message + error.code);
                              }, function() {
                                console.log('Update OK');
                                }
                            )

                            db.transaction(function(tx) {
                                tx.executeSql("SELECT image FROM maintable WHERE id = " + k, [], function(tx, rs) {
                                    var len = rs.rows.length;
                                    console.log(len + " rows found.");
                                    imgarray[i].src = rs.rows.item(0).image
                                }, function(tx, error) {
                                  console.log('SELECT error: ' + error.message);
                                })
                            })

                            wrapper.removeChild(exit)
                            wrapper.removeChild(choice1)
                            wrapper.removeChild(choice2)
                            removeBlur()
                        }
                        function resOnError (er) {
                            alert('error file is '+er.message)
                        }


            // Device Library

            choice2.addEventListener('tap', () => { 
                    navigator.camera.getPicture(onPhotoLibSuccess, onLibFail, { quality: 50,
                        destinationType: Camera.DestinationType.FILE_URI,
                        sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
                    });
                    wrapper.removeChild(exit)
                    wrapper.removeChild(choice1)
                    wrapper.removeChild(choice2)
                    removeBlur()
            })
                function onPhotoLibSuccess(imageUri) {
                    movePicLib(imageUri)
                    
                }
                function onLibFail(error) {
                    alert('from lib ' + error.message)
            
                }
                function movePicLib(file) {
                    window.resolveLocalFileSystemURI(file, resolveOnLibSuccess, resOnLib1Error)
                }
                function resolveOnLibSuccess(entry){ 
                    var d = new Date();
                    var n = d.getTime();
                    //new file name
                    var newFileName = n + ".png";
                    var myFolderLibApp = 'MyAppFolderLib';
                    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
                    //The folder is created if doesn't exist
                    fileSys.root.getDirectory( myFolderLibApp,
                                    {create:true, exclusive: false},
                                    function(directory) {
                                        entry.moveTo(directory, newFileName,  successLibMove, resOnLib2Error);
                                    },
                                    resOnLib3Error);
                                    }
                    
                    , resOnLib4Error);
                }
                function successLibMove(entry) {
                    // Update Database with Image from Library
                    localStorage.setItem('imagepath', entry.toURL())
                    var _imagelib = localStorage.getItem('imagepath')
                    console.log("k = " +k)
                    db.transaction(function(tx) {
                        tx.executeSql("UPDATE maintable SET image = "+ "'"+_imagelib +"'"+" WHERE id = "+ k);
                      }, function(error) {
                        console.log('Update ERROR: ' + error.message + error.code);
                      }, function() {
                        console.log('Update OK');
                        }
                    )

                    db.transaction(function(tx) {
                        tx.executeSql("SELECT image FROM maintable WHERE id = " + k, [], function(tx, rs) {
                            var len = rs.rows.length;
                            console.log(len + " rows found.");
                            imgarray[i].src = rs.rows.item(0).image
                        }, function(tx, error) {
                          console.log('SELECT error: ' + error.message);
                        })
                    })
                }
                function resOnLib1Error (er) {
                    alert('error1 lib file is '+er.message)
                }
                function resOnLib2Error (er) {
                    alert('error2 lib file is '+er.message)
                }
                function resOnLib3Error (er) {
                    alert('error3 lib file is '+er.message)
                }
                function resOnLib4Error (er) {
                    alert('error3 lib file is '+er.message)
                }
        })
      })
    }

    
