import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import sha1 from 'sha1'
import superagent from 'superagent'

//need to check the webpacks???


class Images extends Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         images: []
    //     }
    // }

    uploadFile(files){
        console.log('uploadFile: ')
        const image = files [0]

        const cloudName = 'just-in-case'
        const url = 'https://api.cloudinary.com/v1_1/just-in-case/upload/'
        const timeStamp = Date.now()/1000
        const uploadPreset = 'tsabsfyg'
        const paramsStr = 'timestamp='+timeStamp+'&upload_preset='+uploadPreset+'kXWB37-4kUqVf3JSNKMqwk28St8'

        const signature = sha1(paramsStr)
        const params = {
            'api_key': '755771552928724',
            'timestamp': timestamp,
            'upload_preset': uploadPreset,
            'signature': signature
        }

    let uploadRequest = superagent.post(url)
    uploadRequest.attach('file', image)

    Object.keys(params).forEach((key) => {
        uploadRequest.field(key, params[key])
    })

    uploadRequest.end((err, res) => {
        if (err){
            alert(err)
            return
        }

        console.log('UPLOAD COMPLETE: '+JSON.stringify(res.body))
        const uploaded = res.body
        
        let images = Object.assign([], this.state.images)
        images.push(uploaded)
        this.setState({
            images: images
        })
    })


    }

    render() {
        return (
            <div>
                Images Content
                <Dropzone onDrop={this.uploadFile.bind(this)} />
            </div>
        )
    }

}

export default Images








// var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/just-in-case/upload/'
// var CLOUDINARY_UPLOAD_PRESET = 'tsabsfyg';

// {/* <Image publicId="basketball_in_net.jpg" >
//   <Transformation width="200" height="300" gravity="auto" crop="fill" />
// </Image> */}

// var imgPreview = document.getElementById('photoPreview');
// var fileUpload = document.getElementById('photo');

// fileUpload.addEventListener('change', function (event) {
//     var file = event.target.files[0];
//     console.log(file)

//     var formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

//     axios({
//         url: CLOUDINARY_URL,
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         data: formData
//     }).then(function (res) {
//         console.log(res);
  
//         var formatPhotoUrl = `http://res.cloudinary.com/just-in-case/image/upload/w_100,h_190,g_face,c_fill,q_auto/${res.data.public_id}.jpg`
//         console.log(formatPhotoUrl);
//         imgPreview.src = formatPhotoUrl;

//     }).catch(function (err) {
//         console.error(err);
//     });
// });