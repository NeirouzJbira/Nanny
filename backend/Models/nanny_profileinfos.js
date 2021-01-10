const db = require('../index.js')
const Nanny =require ('./nannyModel.js')

//this 'nannyInfos' array of objects conatins example of informations of some nannies profiles.
const nannyInfos = [
    {   Profile_picture:"https://th.bing.com/th/id/R9f909e47ddfdd7ab255971b2575dcfb8?rik=8JdK90F8aI9J7Q&riu=http%3a%2f%2fwritestylesonline.com%2fwp-content%2fuploads%2f2016%2f08%2fFollow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg&ehk=at%2bW8ahmVDAWSjLun4vkjMUmmlvUD7psBtJ5Bf9jSfA%3d&risl=&pid=ImgRaw",
        FirstName:"Fathia",
        LastName:"Williams",
        email:"fathia_wilgsgfdgsfdgliams@yahoo.com",
        phone_number:"+16102388183",
        region : "Sfax",
        avaibility : {
            day : "Monday",
            time : "Morning",
        },
        about: "I have over 20 years of childcare experience with families in France and the UK.I have cared for children of all ages - from newborn babies up to 11 years old.I'm very capable and competent nanny; very caring, attentive to details and dedicated to my career.I'm an artistic person with a passion for art and i also like travelling.I'm an excellent cook. I'm a well-presented lady with cheerful attitude and i speak French and English.", 
    },
/////////////////////////////////////////////////

    {   Profile_picture:"https://i.pinimg.com/736x/0f/b7/42/0fb742a48bb702427fcf567dfef4dcd3--profile-pictures-head-shots.jpg",
        FirstName:"Mongia",
        LastName:"Simpson",
        email:"simpson.Mdfgsggongia@gmail.it",
        phone_number:"+15854380046",
        region : "Sousse",
        avaibility : {
            day : "Thursday",
            time : "full time" 
        },
        about:"I'm a Qualified Registered Nurse & Midwife.I have over 10 years of childcare experience with children from newborn babies up to teenagers.I have also worked as a nurse & midwife for 2 years in a hospital in Sydney.I relocated to the UK in 2007 and have been working as a daily nanny in London since then.I'm a responsible driver who performs routine vehicle maintenance and has never been in an accident or received a ticket.", 
    
    },


////////////////////////////////////////////////
    {   Profile_picture:"https://thebod.church/wp-content/uploads/2019/11/Website-Headshots-Laura.jpg",
        FirstName:"Khadija",
        LastName:"Carignton",
        email:"carignhgfjfgton_khadija@hotmail.com",
        phone_number:"+16102458310",
        region : "Ariana",
        avaibility : {
            day : "Sunday",
            time :"Afternoon",
        },
        about:"Excelled at providing in-home care for infants, toddlers and children ranging from newborn to age 11.I can make learning a fun experience for your children.I ensure client privacy in handling confidential family matters.Skilled educator who uses creative and personalized methods and has experience in teaching and tutoring children in preschool, elementary school, middle school, and high school.I have excellent communication and comprehension skills that include verbal and written communication in English, Spanish, and French", 

    },


/////////////////////////////////////////////////////////
    {   Profile_picture:"https://media04.meinbezirk.at/user/2019/06/21/3/64983_L.jpg?1561147536",
        FirstName:"Fatma",
        LastName:"Sanchez",
        email:"Fatmasancrefefhez@gmail.fr",
        phone_number:"+16102448290",
        region : "Mennouba",
        avaibility : {
            day : "Wednesday",
            time : "Night",
            
        },
        about:"Qualified Nanny with NNEB Diploma in Childcare and BSc. Hons Degree in Health & Child Development.I used to work as a social worker and child support officer and have over 8 years of direct experience as a Nanny with children from newborns up to 10 years old.I'm also a qualified teacher of English as a Foreign Language (TEFL Certificate) and have extensive teaching experience with school & pre-school aged children.I'm a very proactive, energetic and flexible nanny who loves all kinds of sports", 

    },




/////////////////////////////////////////////////////////////////
    {   Profile_picture:"https://chicagophotovideo.com/wp-content/uploads/2018/01/professional-headshots-for-linkedin-chicago-1024x1024.jpg",
        FirstName:"kloe",
        LastName:"Kerry",
        email:"kloe_kerry@hofeetmail.com",
        phone_number:"+1814351468",
        region : "Gafsa",
        avaibility : {
            day : "Friday",
            time :"Evening"
        
        },
        about:"Praised for creating safe environments for children in alignment with parent goals and expectations. Assimilated into households with diverse traditions, routines and religious/dietary practices. Accommodated last-minute schedule changes and adhered to parent guidelines and cultural mores governing the care, safety, education and enrichment of their children.", 

    },
    
    {
        Profile_picture:"https://www.infopresse.com/Uploads/images/Article/Body/Anastasia%20Unterner.jpg",
     FirstName:"Sawsen",
     LastName:"Sila",
     email:"Sawsen_Sila@gmail.fr",
     phone_number:"+1610244290",
     region:"Kef",
     avaibility:{
     day:"Saturday",
     time:"full time"
     } ,
     about:
     "I have excellent communication and comprehension skills that include verbal and written communication in English, Spanish, and French"
     },
    
     {
         Profile_picture:"https://scottishfinancialnews.com/uploads/Nicola%20McIntyre%20EY%20Partner.jpg",
      FirstName:"Hanen",
      LastName:"Miguel",
      email:"HanenMiguel@gmail.fr",
      phone_number:"+1614748290",
      region:"Beja",
      avaibility:{
      day:"Monday",
      time:"Evening"
      } ,
      about:
      "Assimilated into households with diverse traditions, routines and religious/dietary practices.Praised for creating safe environments for children in alignment with parent goals and expectations.  Accommodated last-minute schedule changes and adhered to parent guidelines and cultural mores governing the care, safety, education and enrichment of their children."
      },
    
      {
          Profile_picture:"https://www.xing.com/image/0_0_2_9eae6c188_21375078_2/lara-egeler-foto.1024x1024.jpg",
       FirstName:"Kaouther",
       LastName:"Mechlaoui",
       email:"MechlaouiKaouther@gmail.fr",
       phone_number:"+16163948290",
       region:"Tataouine",
       avaibility:{
       day:"Thursday",
       time:"Night"
       } ,
       about:
       "Excelled at providing in-home care for infants, toddlers and children ranging from newborn to age 11.I can make learning a fun experience for your children.I ensure client privacy in handling confidential family matters.Skilled educator who uses creative and personalized methods and has experience in teaching and tutoring children in preschool, elementary school, middle school, and high school."
       },
    
       {
           Profile_picture:"https://th.bing.com/th/id/OIP.3wAFeDM_kSrPdz2NIUF0cQHaGy?pid=Api&rs=1",
        FirstName:"Gamra",
        LastName:"Stan",
        email:"Gamra_Stan@gmail.fr",
        phone_number:"+12142448290",
        region:"Nabeul",
        avaibility:{
        day:"Wednesday",
        time:"Afternoon"
        } ,
        about:
        "I have over 10 years of childcare experience with children from newborn babies up to teenagers.I'm a Qualified Registered Nurse & Midwife.I have also worked as a nurse & midwife for 2 years in a hospital in Sydney.I relocated to the UK in 2007 and have been working as a daily nanny in London since then.I'm a responsible driver who performs routine vehicle maintenance and has never been in an accident or received a ticket."
        },
    
        {
            Profile_picture:"https://th.bing.com/th/id/Rc220cdb4551907f583affb066be52fc0?rik=A0yNS6P3eD3R0g&riu=http%3a%2f%2f1.bp.blogspot.com%2f-qnbCiod7vXg%2fTxc_S-1BttI%2fAAAAAAAAC3k%2fNwZTYt-2KK4%2fs1600%2flysaT2.jpg&ehk=hUjYVwt1lwndXGnF1NBQRD13cWBG6zRT8iGn2OR3QCs%3d&risl=&pid=ImgRaw",
         FirstName:"Mennoubia",
         LastName:"Becher",
         email:"BecherMannoubia@gmail.fr",
         phone_number:"+16258448290",
         region:"Siliana",
         avaibility:{
         day:"Tuesday",
         time:"Morning"
         } ,
         about:
         "I have cared for children of all ages - from newborn babies up to 11 years old.I have over 20 years of childcare experience with families in France and the UK.I'm very capable and competent nanny; very caring, attentive to details and dedicated to my career.I'm an artistic person with a passion for art and i also like travelling.I'm an excellent cook. I'm a well-presented lady with cheerful attitude and i speak French and English."
         }
 


]
 
const insertNannyInfos = function() {
    Nanny.create(nannyInfos)
      .then(() => {console.log("db created now")});
  };
  
insertNannyInfos();
insertNannyInfos();

