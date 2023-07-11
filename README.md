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
<br>
##### **libs**
<br>
notifications => react-toastify<br>
Popup => reactjs-popup <br>
>{ MDBListGroup, MDBListGroupItem } => mdb-react-ui-kit <br>
import Cropper from 'react-easy-crop'; <br>
mui/material (sliders)<br>
<br>
<br>
<br>
<br>
<br>
<br>
in cropper jsx element: <br>
    <Cropper
    image={selectedImage}
    crop={crop}
    zoom={zoom}
    aspect={5 /2}
    onCropChange={setCrop}
    onCropComplete={onCropComplete}
    onZoomChange={setZoom}
    restrictPosition={false}
    />
