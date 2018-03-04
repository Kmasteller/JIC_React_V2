import React, { Component } from 'react';
import Input from '../../components/Input';
import {Button, Icon} from 'react-materialize';

class Add extends Component {
  
  constructor(props){
    super(props)

      this.state = {
      photo: "",
      birthdate: "",
      address: "",
      phone: "",
      height: "",
      weight: "",
      hair: "",
      eyes: ""
    }
  }

 componentWillMount () {
   console.log(this.props, "this is props")
 }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
//   userDidAdd = (userData) => {
//   console.log(userData)
//   // axios.post("/api/add", userData).then((res) => {
//   //   console.log(res)
//   // })
// }

  render() {
    return (
      <main>
      {/* <div>
        <Input placeholder="username" name="username" value={this.state.username} onChange={this.handleChange} />
        <br />
        <Input placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} />
        <button onClick={() => this.props.handleLogin(this.state)}>Login</button>
      </div> */}

      <form className id="profile" name="profile" >
        {/* Your content here */}
        <div>
          {/* Modal Structure */}
          <div id="add-modal" className="modal">
            <div className="modal-content">
              <h4 align="center">Lets get started</h4>
              <h6>First, we will walk you through adding the most basic bits of personal information.
                  <br />
                <br />Afterwards, you will have the ability to add additional information to your own profile, OR, begin adding info
                  for the important people in your life.</h6>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-action modal-close waves-effect red btn">Lets do it!</a>
            </div>
          </div>
          {/* Main Card */}
          <div className="col s12 s7">
            <div className="card horizontal profile-pic">
              <div className="card-image">
                <img id="photoPreview" src="../../../assets/images/addform/addformperson.jpg" alt=""/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>Use a clear, well lit photo of your face.</p>
                  <br />
                  <br />
                  <div className="file-field input-field">
                    <div className="waves-effect red btn">
                      <span>
                        <i className="material-icons">photo_camera</i>
                      </span>
                      <Input name="photo" type="file" value={this.state.photo} onChange={this.handleChange} />
                      {/* <input id="photo" type="file" accept="image/*" /> */}
                    </div>
                    <div className="file-path-wrapper">
                    
                      <input className="file-path validate" type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End  */}
          {/* Main Card */}
          <div className="col s12 s7">
            <div className="card horizontal birth-date">
              <div className="card-image">
                <img src="./assets/images/addform/calendar.jpg" alt=""/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>When were you born?</p>
                  <br />
                  <br />

                    {/* <Input name='on' type='date' onChange={function (e, value) { }} /> */}

                    <Input name="birthdate" type='date' placeholder="01/01/1900" value={this.state.birthdate} className="datepicker" onChange={this.handleChange} />
                  {/* <input type="text" id="birthdate" className="datepicker" /> */}
                </div>
              </div>
            </div>
          </div>
          {/* End  */}
          {/* Main Card */}
          <div className="col s12 s7">
            <div className="card horizontal address">
              <div className="card-image">
                <img src="./assets/images/addform/address.jpg" alt=""/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>What is your address?</p>
                  <div className="input-field col s12">
                    <Input placeholder="" name="address" value={this.state.address} className="materialize-textarea" onChange={this.handleChange} />
                    {/* <textarea id="address" className="materialize-textarea" defaultValue={""} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End  */}
          {/* Main Card */}
          <div className="col s12 s7">
            <div className="card horizontal phone">
              <div className="card-image">
                <img src="../../../assets/images/addform/phone.jpg" alt=""/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>What is your phone number?</p>
                  <div className="input-field col s12">
                    <Input placeholder="" name="phone" value={this.state.phone} className="material-textarea" onChange={this.handleChange} />
                    {/* <textarea id="phone" className="materialize-textarea" defaultValue={""} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End  */}
          {/* Main Card */}
          <div className="col s12 s7">
            <div className="card horizontal">
              <div className="card-image">
                <img src="./../../assets/images/addform/ruler.png" alt=""/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>What is your height?</p>
                  <div className="input-field col s12">
                    <Input placeholder="" name="height" value={this.state.height} className="material-textarea" onChange={this.handleChange} />
                    {/* <textarea id="height" className="materialize-textarea" defaultValue={""} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End  */}
          {/* Main Card */}
          <div className="col s12 s7">
            <div className="card horizontal">
              <div className="card-image">
                <img src="../../../assets/images/addform/scale.png" alt=""/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>What is your weight?</p>
                  <div className="input-field col s12">
                    <Input placeholder="" name="weight" value={this.state.weight} className="material-textarea" onChange={this.handleChange} />
                    {/* <textarea id="weight" className="materialize-textarea" defaultValue={""} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End  */}
          {/* Main Card */}
          <div className="col s12 s7">
            <div className="card horizontal">
              <div className="card-image">
                <img src="../../../assets/images/addform/hair.png" alt=""/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>What is your hair color?</p>
                  <div className="input-field col s12">
                    <Input placeholder="" name="hair" value={this.state.hair} className="material-textarea" onChange={this.handleChange} />
                    {/* <textarea id="hair" className="materialize-textarea" defaultValue={""} /> */}
                  </div>
                  {/* <button class="" id="submit-profile" type="submit" name="action">Submit Hair</button> */}
                </div>
              </div>
            </div>
          </div>
          {/* End  */}
          {/* Main Card */}
          <div className="col s12 s7">
            <div className="card horizontal">
              <div className="card-image">
                <img src="../../../assets/images/addform/eye.png" alt=""/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>What is your eye color?</p>
                  <div className="input-field col s12">
                    <Input placeholder="" name="eyes" value={this.state.eyes} className="material-textarea" onChange={this.handleChange} />
                    {/* <textarea id="eyes" className="materialize-textarea" defaultValue={""} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End  */}
          {/* submit button */}
          <div className="row center">
            <div className="col s12">
              {/* <button onClick={() => this.props.handleAdd(this.state)}>Login</button> */}
              <Button waves-effect className='red' waves='light' onClick={() => this.props.handleAdd(this.state)}>Save<Icon right>save</Icon></Button>
              {/* <button className="waves-effect red btn" onClick={() => this.props.handleAdd(this.state)}><i className="material-icons left">save</i>Save</button> */}
              {/* <button className="waves-effect red btn" id="submit-profile" type="submit" name="action"><i className="material-icons left">save</i>Save</button> */}
            </div>
          </div>
          {/* end of submit button */}
          {/* Menu */}
          {/* <div class="fixed-action-btn toolbar ">
            <a class="btn-floating pulse btn-large red">
            <i class="large material-icons">menu</i>
            </a>
            <ul>
            <li class="waves-effect waves-light"><a href="main"><i class="material-icons">home</i></a></li>
            <li class="waves-effect waves-light"><a href="addother.html"><i class="material-icons">add</i></a></li>
            <li class="waves-effect waves-light"><a href="resources.html"><i class="material-icons">format_list_bulleted</i></a></li>
            <li class="waves-effect waves-light"><a href="tour"><i class="material-icons">play_arrow</i></a></li>
            </ul>
        </div> */}
        </div>
      </form>
    </main>



    );
  }
}

export default Add;




// import React from 'react';

// const Add = (props) => {
//   console.log(props)
//   return (
//     <main>
//       <form className id="profile" name="profile" method="POST" action="/profile">
//         {/* Your content here */}
//         <div>
//           {/* Modal Structure */}
//           <div id="add-modal" className="modal">
//             <div className="modal-content">
//               <h4 align="center">Lets get started</h4>
//               <h6>First, we will walk you through adding the most basic bits of personal information.
//                   <br />
//                 <br />Afterwards, you will have the ability to add additional information to your own profile, OR, begin adding info
//                   for the important people in your life.</h6>
//             </div>
//             <div className="modal-footer">
//               <a href="#!" className="modal-action modal-close waves-effect red btn">Lets do it!</a>
//             </div>
//           </div>
//           {/* Main Card */}
//           <div className="col s12 s7">
//             <div className="card horizontal profile-pic">
//               <div className="card-image">
//                 <img id="photoPreview" src="../../../assets/images/addform/addformperson.jpg" alt=""/>
//               </div>
//               <div className="card-stacked">
//                 <div className="card-content">
//                   <p>Use a clear, well lit photo of your face.</p>
//                   <br />
//                   <br />
//                   <div className="file-field input-field">
//                     <div className="waves-effect red btn">
//                       <span>
//                         <i className="material-icons">photo_camera</i>
//                       </span>
//                       <input id="photo" type="file" accept="image/*" />
//                     </div>
//                     <div className="file-path-wrapper">
//                       <input className="file-path validate" type="text" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* End  */}
//           {/* Main Card */}
//           <div className="col s12 s7">
//             <div className="card horizontal birth-date">
//               <div className="card-image">
//                 <img src="./assets/images/addform/calendar.jpg" alt=""/>
//               </div>
//               <div className="card-stacked">
//                 <div className="card-content">
//                   <p>When were you born?</p>
//                   <br />
//                   <br />
//                   <input type="text" id="birthdate" className="datepicker" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* End  */}
//           {/* Main Card */}
//           <div className="col s12 s7">
//             <div className="card horizontal address">
//               <div className="card-image">
//                 <img src="./assets/images/addform/address.jpg" alt=""/>
//               </div>
//               <div className="card-stacked">
//                 <div className="card-content">
//                   <p>What is your address?</p>
//                   <div className="input-field col s12">
//                     <textarea id="address" className="materialize-textarea" defaultValue={""} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* End  */}
//           {/* Main Card */}
//           <div className="col s12 s7">
//             <div className="card horizontal phone">
//               <div className="card-image">
//                 <img src="../../../assets/images/addform/phone.jpg" alt=""/>
//               </div>
//               <div className="card-stacked">
//                 <div className="card-content">
//                   <p>What is your phone number?</p>
//                   <div className="input-field col s12">
//                     <textarea id="phone" className="materialize-textarea" defaultValue={""} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* End  */}
//           {/* Main Card */}
//           <div className="col s12 s7">
//             <div className="card horizontal">
//               <div className="card-image">
//                 <img src="./../../assets/images/addform/ruler.png" alt=""/>
//               </div>
//               <div className="card-stacked">
//                 <div className="card-content">
//                   <p>What is your height?</p>
//                   <div className="input-field col s12">
//                     <textarea id="height" className="materialize-textarea" defaultValue={""} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* End  */}
//           {/* Main Card */}
//           <div className="col s12 s7">
//             <div className="card horizontal">
//               <div className="card-image">
//                 <img src="../../../assets/images/addform/scale.png" alt=""/>
//               </div>
//               <div className="card-stacked">
//                 <div className="card-content">
//                   <p>What is your weight?</p>
//                   <div className="input-field col s12">
//                     <textarea id="weight" className="materialize-textarea" defaultValue={""} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* End  */}
//           {/* Main Card */}
//           <div className="col s12 s7">
//             <div className="card horizontal">
//               <div className="card-image">
//                 <img src="../../../assets/images/addform/hair.png" alt=""/>
//               </div>
//               <div className="card-stacked">
//                 <div className="card-content">
//                   <p>What is your hair color?</p>
//                   <div className="input-field col s12">
//                     <textarea id="hair" className="materialize-textarea" defaultValue={""} />
//                   </div>
//                   {/* <button class="" id="submit-profile" type="submit" name="action">Submit Hair</button> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* End  */}
//           {/* Main Card */}
//           <div className="col s12 s7">
//             <div className="card horizontal">
//               <div className="card-image">
//                 <img src="../../../assets/images/addform/eye.png" alt=""/>
//               </div>
//               <div className="card-stacked">
//                 <div className="card-content">
//                   <p>What is your eye color?</p>
//                   <div className="input-field col s12">
//                     <textarea id="eyes" className="materialize-textarea" defaultValue={""} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* End  */}
//           {/* submit button */}
//           <div className="row center">
//             <div className="col s12">
//               <button className="waves-effect red btn" id="submit-profile" type="submit" name="action"><i className="material-icons left">save</i>Save</button>
//             </div>
//           </div>
//           {/* end of submit button */}
//           {/* Menu */}
//           {/* <div class="fixed-action-btn toolbar ">
//             <a class="btn-floating pulse btn-large red">
//             <i class="large material-icons">menu</i>
//             </a>
//             <ul>
//             <li class="waves-effect waves-light"><a href="main"><i class="material-icons">home</i></a></li>
//             <li class="waves-effect waves-light"><a href="addother.html"><i class="material-icons">add</i></a></li>
//             <li class="waves-effect waves-light"><a href="resources.html"><i class="material-icons">format_list_bulleted</i></a></li>
//             <li class="waves-effect waves-light"><a href="tour"><i class="material-icons">play_arrow</i></a></li>
//             </ul>
//         </div> */}
//         </div>
//       </form>
//     </main>
//   );
// };

// export default Add;