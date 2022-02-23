import React from "react";
import { Segment } from "semantic-ui-react";
import '../css/footer.css'
import { Emojione } from "react-emoji-render";


function Footer() {
    return (
        <Segment attached color="blue" inverted textAlign="center" as="footer">
            <div>
                &copy; {new Date().getFullYear()}, Made with <Emojione text="❤️" className="text-base mx-1 mt-1" /> by <a color="white" href="https://benjamin.michaelis.net" target="_blank" rel="noopener noreferrer">Benjamin Michaelis</a>
            </div>
            <span class="span">
                <div class="wrapper">
                    {/* <div class="icon facebook">
                        <div class="tooltip">Facebook</div>
                        <span><i class="fab fa-facebook-f fa-lg"></i></span>
                    </div>
                    <div class="icon twitter">
                        <div class="tooltip">Twitter</div>
                        <span><i class="fab fa-twitter fa-lg"></i></span>
                    </div> */}
                    <a href="https://www.instagram.com/benjamin.michaelis/" target="_blank" rel="noopener noreferrer">
                        <div class="icon instagram">
                            <div class="tooltip">Instagram</div>
                            <span><i class="fab fa-instagram fa-lg"></i></span>
                        </div>
                    </a>
                    <a href="https://github.com/BenjaminMichaelis" target="_blank" rel="noopener noreferrer">
                        <div class="icon github">
                            <div class="tooltip">Github</div>
                            <span><i class="fab fa-github fa-lg"></i></span>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/channel/UChwRHg6HZvllYlnvXZfQQOA" target="_blank" rel="noopener noreferrer">
                        <div class="icon youtube">
                            <div class="tooltip">Youtube</div>
                            <span><i class="fab fa-youtube fa-lg"></i></span>
                        </div>
                    </a>
                </div>

            </span>
        </Segment>
    );
}

export default Footer;