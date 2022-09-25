import React from "react";

function Links({githubLink, linkedInLink}){
    return(
            <div id="links">
            <h3>Links</h3>
            <a href= {githubLink}>{githubLink}</a>
            <a href={linkedInLink}>{linkedInLink}</a>
            </div>
    )
}


export default Links;