import React from 'react';
import { useStaticQuery, graphql} from 'gatsby';
//import Img from 'gatsby-image';

import * as S from './styled';

const Avatar = () =>{
    const { avatarImage } =  useStaticQuery(
        graphql`
            query {
                avatarImage: file (relativePath : {eq: "profile.jpg" }) {
                    childImageSharp {
                        fixed(width: 60, height : 60){
                            ...GatsbyImageSharpFixed_tracedSVG
                        }
                    }
                }
            }
        `
    )
    return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar;