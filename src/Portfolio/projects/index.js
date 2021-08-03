import IndoEuroIPR from './IndoEuroIPR.png'
import IPO from './IPO.jpg'
import PMJAY from './pmjay-logo-black.png'


const projects = [
    {
        name: "Indo European IPR Collaboration Platform",
        oneLiner: " Indo-European IPR collaboration platform facilitates the filing, protection, and commercialization of ICT patents within and across the two constituencies.",
        tags: ["Java", "Spring Boot", "Angular", "Node Js"],
        organisation: "CDAC",
        image: IndoEuroIPR,
        links: [
            {
                type: "website",
                url: "http://indeuropeanip.com/",
                tooltip: "Indo European IPR Platform"
            }
        ]
    },
    {
        name: "IPR and SIPEIT",
        oneLiner: "Ict-ipr project is created for helping innovaters to file their patents.SIPEIT provide financial support to MSMEs and Technology Startup units for international patent filing to encourage innovation and recognize the value and capabilities of global IP along with capturing growth opportunities in ICTE sector.",
        tags: ["Java", "Struts", "JSP"],
        organisation: "CDAC",
        image: IPO,
        links: [
            {
                type: "website",
                url: "http://ict-ipr.in/",
                tooltip: "SIPEIT"
            }
        ]
    },
    {
        name: "PMJAY",
        oneLiner: "Flagship Project of Prime Minister of India - Pradhan Mantri Jan Arojya Yojna. This project is created in order to provide financial support for comprehensive health care facilities to Individual citizens of India. users can serach their name in the portal to check if they are eligible to apply or not.",
        tags: ["Java", "Rest API", " Solar"],
        organisation: "CDAC",
        image: PMJAY,
        links: [
            {
                type: "website",
                url: "https://electoralsearch.in/",
                tooltip: "electoralsearch"
            }
        ]
    }
]

export default projects