import React,{useState} from 'react'; 
import {Link} from 'react-router-dom';

const Register=()=>{
    return(
        <div class="container">

		<h1 class="py-3 text-center"><u><i>Create your account</i></u></h1>

		 <div class="alert alert-warning alert-dismissible fade show" role="alert">
			<strong>Holy moly!</strong> You should check in on some of those fields below.
			<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
		</div> 

		

		<form action="/register" method="post">
			
			<div class="form-body px-5">
				<div class="row">
					<div class="col-md-6">
						
						<div class="form-group">
							<label class="form-label">First Name</label>
							<input class="form-control" type="text" name="firstname" id="firstname"/> <br></br>
						</div>
                        <div class="form-group">
                             <label class="form-label"> Last name </label>
                            <input class="form-control" type="text" name="lastname" id="lastname"/>  <br></br>
                        </div>
                        <div class="form-group">
                            <label class="form-label"> Residence country </label>
                            <input class="form-control" type="text" name="residence" id="residence"/>  <br></br>
                       </div>
                       <div class="form-group">
                            <label class="form-label"> Phone number </label>
                            <input class="form-control" type="text" name="phone" id="phone"/>  <br></br>
                       </div>
                       <div class="form-group">
                        <label class="form-label"> Email ID </label>
                        <input class="form-control" type="email" name="email" id="email"/>  <br></br>
                    </div>

                    <div class="form-group">
                        <label class="form-label"> LinkedIn </label>
                        <input class="form-control" type="text" name="linkedin" id="linkedin"/> <br></br>
                    </div>

                    <div class="form-group">
                        <label class="form-label"> GitHub </label>
                        <input class="form-control" type="text" name="github" id="github"/> <br></br>
                    </div>

                    
				

					</div>
                    
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label"> Year of Graduation </label>
                        <input class="form-control" type="text" name="year" id="year"/> <br></br>
                    </div>
                    <div class="form-group">
                        <label class="form-label"> Institute Roll Number </label>
                        <input class="form-control" type="text" name="roll" id="roll"/>  <br></br>
                    </div>

                    <div class="form-group">
                        <label class="form-label"> Branch </label>
                        <input class="form-control" type="text" name="branch" id="branch"/>  <br></br>
                    </div>
                    <div class="form-group">
                        <label class="form-label"> Password </label>
                        <input class="form-control" type="password" name="password1" id="password1"/><br></br> 
                    </div>

                    <div class="form-group">
                        <label class="form-label"> Re-enter password </label>
                        <input class="form-control" type="password" name="password2" id="password2"/>  <br></br>
                    </div>
                    </div>
					
				</div>

			</div>

		</form>
		

	</div>
	
    );
}

export default Register;