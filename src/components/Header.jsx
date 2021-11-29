import '../App.css'

const Header = () => {
   return (
       <div className='header-container'>
            <h1 className='header-tag'>Josh Andes</h1>
            <a className='media-links' id='one' href="https://github.com/andesjoshua" target='_blank'><img style={{width: 60}} src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png'/></a> 
            
             <a className='media-links' id='two' href='https://www.linkedin.com/in/joshua-andes-58376a173/' target='_blank'><img style={{width: 60}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png'/></a>

             <a className='media-links' id='three' href='https://medium.com/@1andesjoshua1' target='_blank'><img style={{width: 60}} src='https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Medium_svg5-512.png'/></a>
            <div className='indicator-body'>
             <div class='indicator'>
                 <span></span>
                 <span></span>
                 <span></span>
              </div>
             </div>
       </div>
       
   )
}
export default Header