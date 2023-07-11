# Reactjs.pfp-header-Update
a profile info picture&amp;header update &amp; view in reactjs

![howandwhere-landpage](https://github.com/Ebrahim-Ramadan/Reactjs.pfp-header-Update/assets/65041082/d3e76a9f-0b9b-4fd4-be47-4fe2707236ac)

the homepage of howandwhere web app




![](https://github.com/Ebrahim-Ramadan/Reactjs.pfp-header-Update/blob/main/howandwhere-progress/github-profileUpdate01%20-%20edit.gif)

showing how smooth the edit&rerender looks like with react-easy-crop




![](https://github.com/Ebrahim-Ramadan/Reactjs.pfp-header-Update/blob/main/howandwhere-progress/github-profileUdate03%20-view.gif)

see how cool the view fullscreen images looks like with react-images-viewer




![](https://github.com/Ebrahim-Ramadan/Reactjs.pfp-header-Update/blob/main/howandwhere-progress/github-profileUpdate02%20-%20followerdropmenu.gif)

made this customized dropmenu for followers

<br>
<br>
<br>
#####libs
<br>
notifications => react-toastify<br>
Popup => reactjs-popup <br>
>{ MDBListGroup, MDBListGroupItem } => mdb-react-ui-kit <br>
import Cropper from 'react-easy-crop'; <br>
mui/material (sliders)<br>
<br>
<br>
<br>
in cropper jsx element: <br>
img property for the src, <br>
crop property for point, x , y coordinates, <br>
aspect for crop ratio, <br>
oncropchange func, <br>
oncropcompolete func, <br>
onzoomchange func, <br>
restrictPosition property => whether the position of the media should be restricted to the boundaries of the cropper. Useful setting in case of zoom < 1 or if the cropper should preserve all media content while forcing a specific aspect ratio for media throughout the application.

<br>
<br>
<br>
<br>
<br>
<br>
in Profile.js the main component,
<br>
  import Carousel, { Modal, ModalGateway } from 'react-images'; for the Carousel viewing media 
and notice that in               <HeaderUploadcrop setCroppedImage={handleSave_header} /> <br>
func prop was passed to the HeaderUploadcrop that sets the header img src that's being uploaded by the user, so the user can open, view and edit that uploaded img crop, then save it all in one btn click

