import React from "react";  
import shubham from '../assets/shubham_.jpg'               
import laptopimg from '../assets/laptop_img.jpg'           
import marrige_img from '../assets/marrige-img.png'          
import marrige_congra from '../assets/marrige_congra.png'       
import footerlogo from '../assets/footerlogo.png'             

function Navbar() {        
  return (               
    <>

       {/* navbar section */}     
       
      <div className="px-32 bg-black max-sm:px-0 ">      
        <nav className="flex  justify-between border-b-2 border-slate-50 max-sm:flex max-sm:justify-between">   
        <div className="flex items-center"> <p className="text-2xl font-bold text-white  max-sm:px-2">PORTFOLIO</p></div> 
          <ul className="flex justify-between bg-black text-white p-2 h-[60px] font-bold  items-center  max-sm:hidden ">   
           
            <div className="flex gap-[40px]">    
              <li><a href="/">HOME</a></li>         
              <li><a href="/about">ABOUT</a></li>  
              <li><a href="">SKILL</a></li>       
              <li><a href="">PORTFOLIO</a></li>     
              <li><a href="">CONTACT</a></li>        
              <li><a href="">SERVICE</a></li>       
            </div>

           
          </ul>
          <div className="flex items-center"><button className="bg-blue-700 w-38 h-12 rounded-2xl text-[20px] hover:bg-amber-800 ">Get Started</button></div>
        </nav>
      </div>

      {/* hero section */}

      <div className="w-full h-[75vh] bg-black text-white flex items-center justify-around max-sm:flex-col max-sm:h-auto max-sm:px-2 max-sm:py-15 max-sm:text-center" >
        <div className=" font-bold max-sm:py-10">
        <p className="text-4xl">Hi!</p>
        <p className="text-4xl">I'm Shubham </p>
        <p className="text-4xl">MERN <span className="text-blue-500">Developer</span></p><br/>
        <p className="text-cyan-600 border-b max-sm:py-10">I build robust, scalable web applications from the ground up, specilizing in both fronted and <br/> backend development. Let's create somthing amazing together</p>
        
        <div className="mt-4 text-[18px] max-sm:flex-col max-sm:flex max-sm:gap-8 max-sm:items-center">
          <button className=" bg-blue-700  h-[7vh] rounded-2xl w-[20vh] hover:bg-fuchsia-600">Download Cvv</button>
          <button className="mx-10 border-2 h-[7vh] w-[20vh] max-sm:mx-0 hover:bg-fuchsia-600">Projects</button>
          </div>
        </div>

        <div className="h-[300px] w-[300px] border-2 rounded-[50%] max-sm:mt-6">
          <img className="h-[100%] w-[100%] rounded-[50%] " src={shubham}/>
        </div>
        </div>

        {/* about section */}

        <div className="h-[90vh] border-2 text-center border-none max-sm:px-2 max-sm:h-full ">
          <p className="py-5 text-4xl font-bold "><a>About Me</a></p>  
          <p className="text-slate-600 pb-8">I enjoy turning ideas into reality with a perfect blend of design and functionality, focusing on best practices and the<br/> 
          latest technologies. My goal is to constantly learn, grow, and push the boundaries of what's possible with the web.</p>

          <div className=" flex justify-center items-center max-sm:h-full max-sm:flex-col">
            <div className="h-[400px] w-[630px] max-sm:w-full border-2 border-none"><img  className="h-[100%] w-[100%] " src={laptopimg}/></div>
            <div className="h-[400px] w-[630px] max-sm:w-full border-2 border-black border-none bg-blue-400 text-white  py-30 text-start px-10 ">
              <p className="font-bold text-3xl ">Crafting Innovative Web Solutions with Passion & Precision</p>
              <p className="">I'm a web developer passionate about creating dynamic, user-friendly, and <br/>
              visually stunning websites. With a keen eye for detail and a problem-solving <br/>
              mindset, I bring ideas to life through code</p>
            </div>
          </div>
        </div>

        {/* technology section  */}

        <div className="technology h-[90vh] w-full border-2 border-none bg-indigo-50 text-center max-sm:py-20 max-sm:flex   max-sm:flex-col max-sm:h-full max-sm:w-full ">
          <p className="text-3xl font-bold py-5   ">Our Technology</p>
          <p className="text-slate-600 max-sm:px-20">Expert in HTML, CSS, Tailwind CSS, JavaScript, React, Node.js, Express.js, MongoDB, and WordPress, specializing in API development,<br/>
           authentication, performance optimization, state management, and scalable full-stack architectures</p>

           <div className="flex justify-evenly pt-8 px-28 max-sm:p-0 max-sm:flex-col max-sm:items-center  ">
           <div className="border-2 border-none h-[380px] w-[300px] bg-white rounded-2xl max-sm:w-full">
            <div className="my-12 ">
            <input className="border-2 border-black rounded-sm my-1  w-[90%]" type="text"  placeholder="html/css"/>
            <input className="border-2 border-black rounded-sm my-1  w-[90%]" type="text" placeholder="Tailwind css" />
            <input className="border-2 border-black rounded-sm my-1  w-[90%]" type="text" placeholder="wordpress" />
            <input className="border-2 border-black rounded-sm my-1  w-[90%]" type="text" placeholder="javascript"/>
            <input className="border-2 border-black rounded-sm my-1  w-[90%]" type="text" placeholder="React js"/>
            <input className="border-2 border-black rounded-sm my-1  w-[90%]" type="text" placeholder="Mongo DB"/>
            <input className="border-2 border-black rounded-sm my-1  w-[90%]" type="text" placeholder="Express js"/>
            <input className="border-2 border-black rounded-sm my-1  w-[90%]" type="text" placeholder="Node js"/>
            </div>  
            </div>

           <div className="border-2 border-none rounded-xl h-[380px] w-[480px] bg-white pt-20 hover:bg-blue-400 max-sm:flex-col max-sm:px-10 max-sm:w-full max-sm:flex max-sm:items-center">
            <p className="font-bold text-3xl text-start pl-10 ">Ul/UX Designer </p>
            <p className="text-slate-600 pt-4 text-start pl-10 ">I design intuitive, user-friendly, and visually engaging<br/> 
            interfaces that enhance user experiences, improve<br/>
             accessibility, and drive engagement by blending creativity,<br/>
             functionality, and usability to create seamless digital interactions that delight users.</p>
             <button className=" bg-black text-white mt-8 w-[80%] p-2 rounded-xl">See More</button>
           </div >

           <div className="border-2 border-none rounded-xl h-[380px] w-[480px] bg-white pt-20  hover:bg-blue-400 max-sm:px-10 max-sm:h-full max-sm:py-10 max-sm:w-full ">
            <p className="font-bold text-3xl text-start pl-10 ">Full Stack Web Developer</p>
            <p className="text-slate-600 pt-4 text-start pl-10">I build dynamic, scalable, and user-friendly web <br/>
            applications, handling both front-end and back-end<br/> 
            development. I create seamless, efficient, and responsive<br/>
             digital experiences by combining strong coding skills with<br/>
              problem-solving and creativity."</p>
              <button className=" bg-black text-white mt-8 w-[80%] p-2 rounded-xl">See More</button>
            </div>  

           </div>
        </div>

        {/* portfolio section  */}

        <div className="h-[90vh] w-full  text-center max-sm:w-auto max-sm:h-auto  ">
          <p className="font-bold text-3xl pt-6 ">Portfolio</p>
          <p className="pt-6 text-slate-600 max-sm:px-10">Here are a few of the projects I've worked on. Each one highlights my commitment to clean code, responsive design, and user<br/>
           experienc'</p>

           <div className="flex justify-evenly px-22 pt-10 max-sm:p-0 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:w-auto max-sm:h-full ">
            <div className="h-[400px] w-[600px]  max-sm:px-0 max-sm:w-auto">
              <img className="h-[100%] w-[100%] max-sm:w-auto" src={marrige_img}/>
            </div>
            <div className="h-[400px] w-[600px] max-sm:px-0  max-sm:w-full">
              <img className="h-[100%] w-[100%] max-sm:w-auto" src={marrige_congra} />
            </div>
           </div>

        </div>

        {/* contact secion  */}

        <div className="h-[85vh] w-full  text-center bg-slate-200  max-sm:h-full">
          <p className="font-bold  text-3xl py-5">Contact Me</p>
          <p className="text-slate-600 max-w-full ">I'd love to discuss your project and how I can help. Feel free to reach out if you're interested in collaborating or just<br/>
           want to chat about web development</p>

           <div className="flex justify-center max-sm:flex-col max-sm:items-center ">
            <div className="h-[400px] w-[660px]  bg-blue-500 max-sm:w-full">
              <p className="font-bold text-5xl text-white text-start pt-18 pl-6 pb-5 ">Let's Connect and Build <br/>Something Great!</p>
              <p className="text-slate-300 text-start pl-6 pb-10">Let's work together to turn your ideas into reality. Reach out today, and let's build a <br/>
              stunning, functional, and user-friendly website that meets your needs!</p>
              <p className="text-start pl-6 text-slate-300">mo. : +91 7728870588</p>
              <p className="text-start pl-6 text-slate-300">Mail : shubhamsuman653@gmail.com</p>
            </div>

            <div  className="h-[400px] w-[600px]   bg-white max-sm:w-full ">
              <div className="flex gap-30 pl-34 py-3 max-sm:p-0 max-sm:w-0 max-sm:px-2">
              <label className="text-start">Name</label>
              <input className="border-b-2 border-red-500 mr-15 max-sm:mr-0 " type="text" placeholder="Enter Name"/>
              </div>
              <div className="flex gap-30 pl-34 py-3  max-sm:p-0 max-sm:w-full max-sm:px-2">
              <label className="">Email</label>
              <input className="border-b-2 border-red-500" type="text" placeholder="Enter Email"/>
              </div>
              <div className=" flex mt-6 ml-22 max-sm:ml-0 max-sm:px-2">
              <label>Massage</label>
              </div>
              <textarea placeholder="ask something" className="h-[200px] border-b-5 border-red-500  max-sm:w-full" cols={55}  ></textarea>
              <div>
              <button className="text-white bg-blue-700 h-10 w-md rounded-xl font-bold max-sm:w-full">Submit</button>
              </div>
            
            </div>
            
           </div>
        </div>

        {/* footer section  */}
        <div className="h-[55vh] w-full border bg-black text-white max-sm:flex max-sm:flex-col max-sm:h-full max-sm:w-full">
        <div className=" flex justify-around border-b-2 border-red-500 w-[90%]  ml-15 max-sm:m-0 items-center max-sm:w-full max-sm:flex-col max-sm:items-center">
          
          <div className="h-[250px] w-[250px]  mt-15 ">
            <img className="h-[100%] w-[100%]" src={footerlogo}/>
          </div>
          <div className="">
            
            <div className="flex mt-25 space-x-15 max-sm:flex-col max-sm:items-center  max-sm:space-x-0">
            <p className="text-2xl font-bold ">PORTFOLIO</p>
            <ul >
              <li className="text-2xl pb-4">About Us</li>
              <li>Mission</li>
              <li>Team</li>
              <li>Newseletter</li>
            </ul>
            <ul>
            <li className="text-2xl pb-4">Support</li>
            <li>contact</li>
            <li>Refund Policy</li>
            <li>FAQ's</li>
            </ul>
            <ul>
              <li className="text-2xl pb-4  max-sm:flex-col max-sm:items-center">Social</li>
              <li>Instagram</li>
              <li>Linkedin</li>
              <li>Twitter</li>
            </ul>
            </div>
          </div>

          </div >

          <div className=" flex justify-between px-18 my-4  max-sm:flex ">
            <div className="flex gap-20  ">
          <p>CopyRight @ portfolio  </p>
          <p>Terms of Service</p>
          </div>
          <p>Back To Top</p>
          </div>
          </div>







    </>
  )
}

export default Navbar