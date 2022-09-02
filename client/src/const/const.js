
//variable image use in the carrusel 
import  image_1  from '../img/image_1.jpg';
import  image_2  from '../img/image_2.jpg';
import  image_3  from '../img/image_3.jpg';
import  image_4  from '../img/image_4.jpg';
import  image_5  from '../img/image_5.jpg';
import  image_6  from '../img/image_6.jpg';
//variables randoms
import  figura_9 from  '../img/random/figura_9.jpg';
import  figura_10 from  '../img/random/figura_10.jpg'
import  figura_11 from  '../img/random/figura_11.jpg'
import  figura_12 from  '../img/random/figura_12.jpg'
import  figura_13 from  '../img/random/figura_13.jpg'
import  figura_14 from  '../img/random/figura_14.jpg'

// varibles svg icon plat forms
import { SiSpacemacs,SiAdobelightroomclassic,SiJaguar,SiMacos,SiSega,SiWindows,SiApple,SiLinux,SiNintendo,SiPlaystation,SiXbox,SiPlaystationvita,SiWii,SiPlaystation2,SiNintendogamecube,SiPagseguro } from 'react-icons/si';
import { DiAndroid,DiCreativecommons} from 'react-icons/di';
import { FiSmartphone} from 'react-icons/fi';
import { MdWeb,MdOutlineGamepad} from 'react-icons/md';
import { GiSensuousness,GiGamepadCross,GiSpikedHalo,GiSpiralTentacle} from 'react-icons/gi';
import { FaNeos} from 'react-icons/fa';






// personal data////////////////////////////////////////////
import link from '../img/perdonal/LinkedIn.jpg'
import git from '../img/perdonal/descarga.jpg'

///////////////////////////////////////////////////////////
export const image1=image_1;
export const image2=image_2
export const image3=image_3
export const image4=image_4
export const image5=image_5
export const image6=image_6
export const  links=link
export const  gits=git
/////////defoult image//////////////////////////////////////////////////////
 const randoms=[figura_9,figura_10,figura_11,figura_12,figura_13,figura_14]

export const random=()=>{
  return randoms[Math.floor(Math.random()*randoms.length)]
}





// varible selector searchBar

export const optionListGenres = [];



//svg imagen 
export const sebarchBar_path="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"

/// sevg imagen platforms

export const iconPlatfomrs={
  PC:<SiWindows/>,
  PlayStation:<SiPlaystation/>,
  Xbox:<SiXbox/>,
  Nintendo:<SiNintendo/>,
  Apple:<SiApple/>,
  Linux:<SiLinux/>,
  Android:<DiAndroid/>  ,
  iOS:<FiSmartphone/>,
  Web:<MdWeb/>,
  SEGA:<SiSega />,
  PS:<SiPlaystationvita/>,
  Wii:<SiWii/>,
  Game:<MdOutlineGamepad/>,
  Gines:<GiSensuousness/>,
  Atari:<GiGamepadCross/>,
  NES:<SiNintendogamecube/>,
  Commodore:<DiCreativecommons/>,
  Genesis:<SiPagseguro/>,
  Neo:<FaNeos/>,
  Macos:<SiMacos/>,
  Jaguar:<SiJaguar/>,
  Classic:<SiAdobelightroomclassic/>,
  macOS:<SiSpacemacs/>,
  PSP:<SiPlaystation2/>,
  Dreamcast:<GiSpiralTentacle/>,
  DO:<GiSpikedHalo/>

}






/////////////////////// footer////////////////////////////////
export const consoles=[
"PC",
"PlayStation",
"Xbox ",
"Nintendo",
"Stadia",
"Movil",
"Wii",
]