const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lc.medinaup@gmail.com',
    pass: 'MedinaUp2020',
  },
});
module.exports.sendResetLink = (email, id) => {
  const mailOptions = {
    to: email,
    subject: 'Reset password instructions ',
    html: `<style style="-webkit-font-smoothing:antialiased;">body *{
			font-family:'Open Sans',Arial,sans-serif !important;
    }
    .ii a[href] {
      color: #fff;
    text-decoration: none;
  }
		div,p,a,li,td{
			-webkit-text-size-adjust:none;
		}
		*{
			-webkit-font-smoothing:antialiased;
			-moz-osx-font-smoothing:grayscale;
		}
		td{
			word-break:break-word;
		}
		a{
			word-break:break-word;
			text-decoration:none;
			color:inherit;
		}
		body{
			width:100%;
			height:100%;
			background-color:#ffffff;
			margin:0;
			padding:0;
			-webkit-font-smoothing:antialiased;
		}
		html{
			background-color:#ffffff;
			width:100%;
		}
		body p{
			padding:0 !important;
			margin-top:0 !important;
			margin-right:0 !important;
			margin-bottom:0 !important;
			margin-left:0 !important;
		}
		body img{
			user-drag:none;
			-moz-user-select:none;
			-webkit-user-drag:none;
		}
		body .hover:hover{
			opacity:.85;
			filter:alpha(opacity=85);
		}
		body td img:hover{
			opacity:.85;
			filter:alpha(opacity=85);
		}
		body .underline:hover{
			text-decoration:underline !important;
		}
		body .hoverGreen img{
			opacity:1;
			transition:opacity .4s ease-in-out;
			-moz-transition:opacity .4s ease-in-out;
			-webkit-transition:opacity .4s ease-in-out;
		}
		body .hoverGreen img:hover{
			opacity:.1;
			filter:alpha(opacity=10)transition: opacity .4s ease-in-out;
			-moz-transition:opacity .4s ease-in-out;
			-webkit-transition:opacity .4s ease-in-out;
		}
		body .jump:hover{
			opacity:.75;
			filter:alpha(opacity=75);
			padding-top:10px !important;
		}
		body a.rotator img{
			-webkit-transition:all 1s ease-in-out;
			-moz-transition:all 1s ease-in-out;
			-o-transition:all 1s ease-in-out;
			-ms-transition:all 1s ease-in-out;
		}
		body a.rotator img:hover{
			-webkit-transform:rotate(360deg);
			-moz-transform:rotate(360deg);
			-o-transform:rotate(360deg);
			-ms-transform:rotate(360deg);
		}
		body #logo img{
			width:125px;
			height:auto;
		}
		body .logo125 img{
			width:125px;
			height:auto;
		}
		body #icon12 img{
			width:12px;
			height:auto;
		}
		body .icon75 img{
			width:75px;
			height:auto;
		}
		body .icon24 img{
			width:24px;
			height:auto;
		}
		body .icon36 img{
			width:36px;
			height:auto;
		}
		body .icon40 img{
			width:40px;
			height:auto;
		}
		body .image280 img{
			width:280px;
			height:auto;
		}
		body .image245 img{
			width:245px;
			height:auto;
		}
		body .image200 img{
			width:200px;
			height:auto;
		}
		body .image275 img{
			width:275px;
			height:auto;
		}
		body .image250 img{
			width:250px;
			height:auto;
		}
		body .image230 img{
			width:230px;
			height:auto;
		}
		body .image600 img{
			width:600px;
			height:auto;
		}
		body .image135 img{
			width:135px;
			height:auto;
			-webkit-border-radius:4px;
			-moz-border-radius:4px;
			border-radius:4px;
		}
		body .avatar72 img{
			width:72px;
			height:auto;
			-webkit-border-radius:3px;
			-moz-border-radius:3px;
			border-radius:3px;
		}
		body *{
			font-family:'Open Sans',Arial,sans-serif !important;
		}
		div,p,a,li,td{
			-webkit-text-size-adjust:none;
		}
		*{
			-webkit-font-smoothing:antialiased;
			-moz-osx-font-smoothing:grayscale;
		}
		td{
			word-break:break-word;
		}
		a{
			word-break:break-word;
			text-decoration:none;
			color:inherit;
		}
		body{
			width:100%;
			height:100%;
			background-color:#ffffff;
			margin:0;
			padding:0;
			-webkit-font-smoothing:antialiased;
		}
		html{
			background-color:#ffffff;
			width:100%;
		}
		body p{
			padding:0 !important;
			margin-top:0 !important;
			margin-right:0 !important;
			margin-bottom:0 !important;
			margin-left:0 !important;
		}
		body img{
			user-drag:none;
			-moz-user-select:none;
			-webkit-user-drag:none;
		}
		body .hover:hover{
			opacity:.85;
			filter:alpha(opacity=85);
		}
		body td img:hover{
			opacity:.85;
			filter:alpha(opacity=85);
		}
		body .underline:hover{
			text-decoration:underline !important;
		}
		body .hoverGreen img{
			opacity:1;
			transition:opacity .4s ease-in-out;
			-moz-transition:opacity .4s ease-in-out;
			-webkit-transition:opacity .4s ease-in-out;
		}
		body .hoverGreen img:hover{
			opacity:.1;
			filter:alpha(opacity=10)transition: opacity .4s ease-in-out;
			-moz-transition:opacity .4s ease-in-out;
			-webkit-transition:opacity .4s ease-in-out;
		}
		body .jump:hover{
			opacity:.75;
			filter:alpha(opacity=75);
			padding-top:10px !important;
		}
		body a.rotator img{
			-webkit-transition:all 1s ease-in-out;
			-moz-transition:all 1s ease-in-out;
			-o-transition:all 1s ease-in-out;
			-ms-transition:all 1s ease-in-out;
		}
		body a.rotator img:hover{
			-webkit-transform:rotate(360deg);
			-moz-transform:rotate(360deg);
			-o-transform:rotate(360deg);
			-ms-transform:rotate(360deg);
		}
		body #logo img{
			width:125px;
			height:auto;
		}
		body .logo125 img{
			width:125px;
			height:auto;
		}
		body #icon12 img{
			width:12px;
			height:auto;
		}
		body .icon75 img{
			width:75px;
			height:auto;
		}
		body .icon24 img{
			width:24px;
			height:auto;
		}
		body .icon36 img{
			width:36px;
			height:auto;
		}
		body .icon40 img{
			width:40px;
			height:auto;
		}
		body .image280 img{
			width:280px;
			height:auto;
		}
		body .image245 img{
			width:245px;
			height:auto;
		}
		body .image200 img{
			width:200px;
			height:auto;
		}
		body .image275 img{
			width:275px;
			height:auto;
		}
		body .image250 img{
			width:250px;
			height:auto;
		}
		body .image230 img{
			width:230px;
			height:auto;
		}
		body .image600 img{
			width:600px;
			height:auto;
		}
		body .image135 img{
			width:135px;
			height:auto;
			-webkit-border-radius:4px;
			-moz-border-radius:4px;
			border-radius:4px;
		}
		body .avatar72 img{
			width:72px;
			height:auto;
			-webkit-border-radius:3px;
			-moz-border-radius:3px;
			border-radius:3px;
		}
		@media only screen and (max-width: 640px){
				body body{
					width:auto !important;
				}
		}	
		@media only screen and (max-width: 640px){
				body table[class=full]{
					width:100% !important;
					clear:both;
				}
		}	
		@media only screen and (max-width: 640px){
				body table[class=mobile]{
					width:100% !important;
					padding-left:20px;
					padding-right:20px;
					clear:both;
				}
		}	
		@media only screen and (max-width: 640px){
				body table[class=fullCenter]{
					width:100% !important;
					text-align:center !important;
					clear:both;
				}
		}	
		@media only screen and (max-width: 640px){
				body td[class=fullCenter]{
					width:100% !important;
					text-align:center !important;
					clear:both;
				}
		}	
		@media only screen and (max-width: 640px){
				body [class=erase]{
					display:none;
				}
		}	
		@media only screen and (max-width: 640px){
				body [class=buttonScale]{
					float:none !important;
					text-align:center !important;
					display:inline-block !important;
					clear:both;
				}
		}	
		@media only screen and (max-width: 640px){
				body .image600 img{
					width:100% !important;
				}
		}	
		@media only screen and (max-width: 640px){
				body td[class=image230]{
					width:230px !important;
					text-align:center !important;
					clear:both;
				}
		}	
		@media only screen and (max-width: 640px){
				body .image298 img{
					width:100% !important;
				}
		}	
		@media only screen and (max-width: 640px){
				table[class=image110]{
					text-align:center;
					float:none;
					width:70% !important;
				}
		}	
		@media only screen and (max-width: 640px){
				body td[class=pad30]{
					padding-left:25px !important;
					padding-right:25px !important;
					text-align:center !important;
					clear:both;
				}
		}	
		@media only screen and (max-width: 640px){
				body td[class=image298] img{
					width:100% !important;
					text-align:center !important;
					clear:both;
				}
		}	
		@media only screen and (max-width: 640px){
				body .h30{
					width:100% !important;
					height:30px !important;
				}
		}	
		@media only screen and (max-width: 640px){
				body .h15{
					width:100% !important;
					height:15px !important;
				}
		}	
		@media only screen and (max-width: 640px){
				body table[class=sponsor]{
					text-align:center;
					float:none;
					width:80% !important;
				}
		}	
		@media only screen and (max-width: 640px){
				body .w10{
					width:8% !important;
					height:10px !important;
				}
		}	
		@media only screen and (max-width: 640px){
				body .pad20{
					padding-left:20px !important;
					padding-right:20px !important;
				}
		}	
		@media only screen and (max-width: 640px){
				body .h65{
					width:100%;
					height:65px !important;
				}
		}</style>
<table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; background: #000000; font-family: 'Open Sans', Arial, sans-serif !important;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#000000">
  <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
    <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
      <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; background: #000000; font-family: 'Open Sans', Arial, sans-serif !important;"><!-- [if gte mso 9]>
            <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="mso-width-percent:1000;">
              <v:fill type="tile" src="images/5a2ddcd490a50untitled-2.png" ></v:fill>
              <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
                <![endif]-->
        <div style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
          <table class="mobile" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; width: 94.979%; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
            <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
              <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; width: 100%; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center"><!-- Nav Mobile Wrapper -->
                  <table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                    <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                      <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                        <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center" width="100%">
                          <table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                            <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                              <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%" height="70">&nbsp;</td>
                              </tr>
                            </tbody>
                          </table>
                          <table class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; text-align: center; width: 92.5925%; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                            <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                              <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                <td class="image200" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; text-align: center; width: 100%; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center" width="100%">
                                  <table class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                                    <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                      <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                        <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center" width="100%">
                                          <img class="editedImage" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-user-drag:none;height:auto;width:200px;-webkit-font-smoothing: antialiased; -webkit-user-drag: none; height: auto; width: 200px; font-family: 'Open Sans', Arial, sans-serif !important; display: block; margin-left: auto; margin-right: auto;" src="https://share1.cloudhq-mkt3.net/926cc73c732d75.png" alt="" width="80" height="106" border="0">
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                            <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                              <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%" height="40">&nbsp;</td>
                              </tr>
                            </tbody>
                          </table>
<!-- Text -->
                          <table class="mobile" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; width: 648px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                            <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                              <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                <td class="font32" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 46px; color: #ffffff; text-align: center; line-height: 56px; font-weight: bold; vertical-align: top; width: 648px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center">
                                  <span class="font44" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: #ffffff;">We're glad to have you back</span> 
                                  <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                                  <span class="font44" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: #ffffff; font-weight: 100;">...and to help you for sure.</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table class="mobile" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                            <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                              <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%" height="50">&nbsp;</td>
                              </tr>
                            </tbody>
                          </table>
                          <table class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" cellspacing="0" cellpadding="0" align="center"><!-- Button Center -->
                            <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                              <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center">
                                  <table style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; width: 203px; height: 47px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" cellspacing="0" cellpadding="0" align="center">
                                    <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                      <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                                        <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: Helvetica, Arial, sans-serif, 'Open Sans'; -webkit-font-smoothing: antialiased; word-break: break-word; border-radius: 25px; padding-left: 25px; padding-right: 25px; font-weight: 400; color: #ffffff; background: #ffc845; width: 152.667px; height: 10px;" align="center" bgcolor="#FAC32E" height="41">
                                          <span style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: #ffffff; font-size: 16px; text-decoration: none; line-height: 41px;">
                                            <strong style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;" data-renderer-mark="true"><a style="text-decoration: "none";color: "white";" href="${process.env.REACT_APP_API_URL || 'https://medina-up-testing.netlify.app'}/reset/${id}">REST PASSWORD</a></strong>
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
<!-- End Button Center -->
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                        <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                          <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                        </td>
                      </tr>
                      <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                        <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                          <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
<!-- [if gte mso 9.]>
              </v:textbox>
            </v:fill>
          </v:rect>
          <![endif]-->
      </td>
    </tr>
  </tbody>
</table>
<table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background-color: #f6f6f6; z-index: 99999; top: 0px; left: 0px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#F6F6F6">
  <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
    <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
      <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word;" align="center" valign="top" width="100%">
        <table class="mobile" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; width: 59.375%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
          <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
            <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
              <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; width: 100%;" align="center">&nbsp;
                <table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 501px; width: 368px;" border="0" width="456" cellspacing="0" cellpadding="0" align="center">
                  <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                      <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; width: 367.5px;" align="center"><!-- Text Right -->
                        <table class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; width: 769px; height: 424px; font-family: 'Open Sans', Arial, sans-serif !important;" border="0" width="310" cellspacing="0" cellpadding="0" align="left">
                          <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                              <td class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; text-align: left; font-size: 22px; color: #27272b; line-height: 28px; font-weight: bold; width: 768px; height: 10px; font-family: 'Open Sans', Arial, sans-serif !important;" valign="middle">&nbsp;</td>
                            </tr>
                            <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                              <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; width: 768px; height: 10px; font-family: 'Open Sans', Arial, sans-serif !important;" height="25">&nbsp;</td>
                            </tr>
                            <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 56px;">
                              <td class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 22px; color: #27272b; line-height: 28px; font-weight: bold; height: 56px; width: 768px; text-align: center; font-family: 'Open Sans', Arial, sans-serif !important;" valign="middle">please follow the steps below to secure your account:</td>
                            </tr>
                            <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 232px;">
                              <td class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; text-align: left; font-size: 14px; color: #828282; line-height: 22px; font-weight: 400; height: 232px; width: 768px; font-family: 'Open Sans', Arial, sans-serif !important;" valign="middle">
                                <p style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;margin-left:0px !important;margin-bottom:0px !important;margin-right:0px !important;margin-top:0px !important;padding-left:0px !important;padding-bottom:0px !important;padding-right:0px !important;padding-top:0px !important;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; padding: 0px !important; margin: 0px !important;" data-renderer-start-pos="58">(This link above is valid only for 7 days, if it's expird you can re-request for change and we'll be happy to send you a new link)</p>
Step 1: Once you've reset your password, update your password recovery options in your account 
                                <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">Step 2: Remember to sign in to all your devices associated to 
                                <a class="sc-zDqdV kOqhyL" href="mailto:%22jhon.smith@gmail.com" title="mailto:%22jhon.smith@gmail.com" data-renderer-mark="true" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;color:inherit;text-decoration:none;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: inherit; text-decoration: none; word-break: break-word;">"${email}</a>" with the new password 
                                <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                <p style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;margin-left:0px !important;margin-bottom:0px !important;margin-right:0px !important;margin-top:0px !important;padding-left:0px !important;padding-bottom:0px !important;padding-right:0px !important;padding-top:0px !important;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; padding: 0px !important; margin: 0px !important;" data-renderer-start-pos="449">Have a great day!</p>
                                <p style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;margin-left:0px !important;margin-bottom:0px !important;margin-right:0px !important;margin-top:0px !important;padding-left:0px !important;padding-bottom:0px !important;padding-right:0px !important;padding-top:0px !important;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; padding: 0px !important; margin: 0px !important;" data-renderer-start-pos="497">&nbsp;</p>
                              </td>
                            </tr>

                            <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 56px;">
                              <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; width: 768px; height: 56px; text-align: center; font-family: 'Open Sans', Arial, sans-serif !important;" height="65">&nbsp;</td>
                            </tr>
                          </tbody>
                        </table>
                        <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
<table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #ffc845;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#FAC32E">
  <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
    <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
      <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word;" align="center" valign="top" width="100%">
        <table class="mobile" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 128px; width: 574px;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
          <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
            <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 98px;">
              <td class="logo" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 98px; width: 573.333px;" align="center">
                <table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; border-collapse: collapse; height: 10px; width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
                  <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                      <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px;" width="100%" height="20">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
                <table class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; text-align: center; width: 90.8333%; height: 73px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
                  <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 25px;">
                      <td class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: Helvetica, Arial, sans-serif, 'Open Sans'; -webkit-font-smoothing: antialiased; word-break: break-word; text-align: center; font-size: 13px; color: #ffffff; line-height: 26px; font-weight: 400; width: 100%; height: 25px;" width="100%">*|USER:ADDRESS|*</td>
                    </tr>
                    <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 0px;">
                      <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; width: 100%; height: 0px;" width="100%" height="1">&nbsp;</td>
                    </tr>
                    <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 48px;">
                      <td class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: Helvetica, Arial, sans-serif, 'Open Sans'; -webkit-font-smoothing: antialiased; word-break: break-word; text-align: center; font-size: 13px; color: #ffffff; line-height: 26px; font-weight: 400; width: 100%; height: 48px;" width="100%">Regards, 
                        <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">The Local Support Team*
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
              <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px; width: 573.333px;" align="center">
                <table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; border-collapse: collapse; height: 10px; width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
                  <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                      <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px;" width="100%" height="10">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
              <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px; width: 573.333px;" align="center">&nbsp;</td>
            </tr>
            <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
              <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px; width: 573.333px;">&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
<table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; background: #000000; font-family: 'Open Sans', Arial, sans-serif !important;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#000000">
  <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
    <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
      <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center" valign="top" width="100%">
        <table class="mobile" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
          <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
            <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
              <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center" width="100%">
                <table class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; text-align: center; height: 74px; width: 100%; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
                  <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 25px;">
                      <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; height: 25px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%" height="25">&nbsp;</td>
                    </tr>
                    <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 15px;">
                      <td class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; text-align: center; font-size: 12px; color: #a1a6a7; font-weight: 400; height: 15px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%">&nbsp;</td>
                    </tr>
                    <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 24px;">
                      <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; height: 24px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%" height="24">&nbsp;</td>
                    </tr>
                    <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                      <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; height: 10px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%" height="1">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
`,
    // html: `${process.env.REACT_APP_API_URL || 'https://medina-up-testing.netlify.app'}/reset/${id}`,
  };
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent!');
    }
  });
};

module.exports.sendPassword = (email, password) => {
  const mailOptions = {
    to: email,
    subject: 'Your current password',
    html: `<style>body *{
      font-family:'Open Sans',Arial,sans-serif !important;
      color: #2b2b2b;
		}
		div,p,a,li,td{
      -webkit-text-size-adjust:none;
      color: #2b2b2b;
    }
    .im {
      color: #545454;
    }
		*{
			-webkit-font-smoothing:antialiased;
			-moz-osx-font-smoothing:grayscale;
		}
		td{
			word-break:break-word;
		}
		a{
			word-break:break-word;
			text-decoration:none;
			color:inherit;
		}
		body{
			width:100%;
			height:100%;
			background-color:#ffffff;
			margin:0;
			padding:0;
			-webkit-font-smoothing:antialiased;
		}
		html{
			background-color:#ffffff;
			width:100%;
		}
		body p{
			padding:0 !important;
			margin-top:0 !important;
			margin-right:0 !important;
			margin-bottom:0 !important;
			margin-left:0 !important;
		}
		body img{
			user-drag:none;
			-moz-user-select:none;
			-webkit-user-drag:none;
		}
		body .hover:hover{
			opacity:.85;
			filter:alpha(opacity=85);
		}
		body td img:hover{
			opacity:.85;
			filter:alpha(opacity=85);
		}
		body .underline:hover{
			text-decoration:underline !important;
		}
		body .hoverGreen img{
			opacity:1;
			transition:opacity .4s ease-in-out;
			-moz-transition:opacity .4s ease-in-out;
			-webkit-transition:opacity .4s ease-in-out;
		}
		body .hoverGreen img:hover{
			opacity:.1;
			filter:alpha(opacity=10)transition: opacity .4s ease-in-out;
			-moz-transition:opacity .4s ease-in-out;
			-webkit-transition:opacity .4s ease-in-out;
		}
		body .jump:hover{
			opacity:.75;
			filter:alpha(opacity=75);
			padding-top:10px !important;
		}
		body a.rotator img{
			-webkit-transition:all 1s ease-in-out;
			-moz-transition:all 1s ease-in-out;
			-o-transition:all 1s ease-in-out;
			-ms-transition:all 1s ease-in-out;
		}
		body a.rotator img:hover{
			-webkit-transform:rotate(360deg);
			-moz-transform:rotate(360deg);
			-o-transform:rotate(360deg);
			-ms-transform:rotate(360deg);
		}
		body #logo img{
			width:125px;
			height:auto;
		}
		body .logo125 img{
			width:125px;
			height:auto;
		}
		body #icon12 img{
			width:12px;
			height:auto;
		}
		body .icon75 img{
			width:75px;
			height:auto;
		}
		body .icon24 img{
			width:24px;
			height:auto;
		}
		body .icon36 img{
			width:36px;
			height:auto;
		}
		body .icon40 img{
			width:40px;
			height:auto;
		}
		body .image280 img{
			width:280px;
			height:auto;
		}
		body .image245 img{
			width:245px;
			height:auto;
		}
		body .image200 img{
			width:200px;
			height:auto;
		}
		body .image275 img{
			width:275px;
			height:auto;
		}
		body .image250 img{
			width:250px;
			height:auto;
		}
		body .image230 img{
			width:230px;
			height:auto;
		}
		body .image600 img{
			width:600px;
			height:auto;
		}
		body .image135 img{
			width:135px;
			height:auto;
			-webkit-border-radius:4px;
			-moz-border-radius:4px;
			border-radius:4px;
		}
		body .avatar72 img{
			width:72px;
			height:auto;
			-webkit-border-radius:3px;
			-moz-border-radius:3px;
			border-radius:3px;
		}
		body *{
			font-family:'Open Sans',Arial,sans-serif !important;
		}
		div,p,a,li,td{
      -webkit-text-size-adjust:none;
      color: #2b2b2b;
		}
		*{
			-webkit-font-smoothing:antialiased;
			-moz-osx-font-smoothing:grayscale;
		}
		td{
			word-break:break-word;
		}
		a{
			word-break:break-word;
			text-decoration:none;
			color:inherit;
		}
		body{
			width:100%;
			height:100%;
			background-color:#ffffff;
			margin:0;
			padding:0;
			-webkit-font-smoothing:antialiased;
		}
		html{
			background-color:#ffffff;
			width:100%;
		}
		body p{
			padding:0 !important;
			margin-top:0 !important;
			margin-right:0 !important;
			margin-bottom:0 !important;
			margin-left:0 !important;
		}
		body img{
			user-drag:none;
			-moz-user-select:none;
			-webkit-user-drag:none;
		}
		body .hover:hover{
			opacity:.85;
			filter:alpha(opacity=85);
		}
		body td img:hover{
			opacity:.85;
			filter:alpha(opacity=85);
		}
		body .underline:hover{
			text-decoration:underline !important;
		}
		body .hoverGreen img{
			opacity:1;
			transition:opacity .4s ease-in-out;
			-moz-transition:opacity .4s ease-in-out;
			-webkit-transition:opacity .4s ease-in-out;
		}
		body .hoverGreen img:hover{
			opacity:.1;
			filter:alpha(opacity=10)transition: opacity .4s ease-in-out;
			-moz-transition:opacity .4s ease-in-out;
			-webkit-transition:opacity .4s ease-in-out;
		}
		body .jump:hover{
			opacity:.75;
			filter:alpha(opacity=75);
			padding-top:10px !important;
		}
		body a.rotator img{
			-webkit-transition:all 1s ease-in-out;
			-moz-transition:all 1s ease-in-out;
			-o-transition:all 1s ease-in-out;
			-ms-transition:all 1s ease-in-out;
		}
		body a.rotator img:hover{
			-webkit-transform:rotate(360deg);
			-moz-transform:rotate(360deg);
			-o-transform:rotate(360deg);
			-ms-transform:rotate(360deg);
		}
		body #logo img{
			width:125px;
			height:auto;
		}
		body .logo125 img{
			width:125px;
			height:auto;
		}
		body #icon12 img{
			width:12px;
			height:auto;
		}
		body .icon75 img{
			width:75px;
			height:auto;
		}
		body .icon24 img{
			width:24px;
			height:auto;
		}
		body .icon36 img{
			width:36px;
			height:auto;
		}
		body .icon40 img{
			width:40px;
			height:auto;
		}
		body .image280 img{
			width:280px;
			height:auto;
		}  
		body .image245 img{
			width:245px;
			height:auto;
		}
		body .image200 img{
			width:200px;
			height:auto;
		}
		body .image275 img{
			width:275px;
			height:auto;
		}
		body .image250 img{
			width:250px;
			height:auto;
		}
		body .image230 img{
			width:230px;
			height:auto;
		}
		body .image600 img{
			width:600px;
			height:auto;
		}
		body .image135 img{
			width:135px;
			height:auto;
			-webkit-border-radius:4px;
			-moz-border-radius:4px;
			border-radius:4px;
		}
		body .avatar72 img{
			width:72px;
			height:auto;
			-webkit-border-radius:3px;
			-moz-border-radius:3px;
			border-radius:3px;
		}
		@media only screen and (max-width: 640px){
				body body{
					width:auto !important;
				}
		}	
		@media only screen and (max-width: 640px){
				body table[class=full]{
					width:100% !important;
					clear:both;
				}
		}	
		@media only screen and (max-width: 640px){
				body table[class=mobile]{
					width:100% !important;
					padding-left:20px;
					padding-right:20px;
					clear:both;
				}
		}	
		@media only screen and (max-width: 640px){
				body table[class=fullCenter]{
					width:100% !important;
					text-align:center !important;
					clear:both;
				}
		}	
		@media only screen and (max-width: 640px){
				body td[class=fullCenter]{
					width:100% !important;
					text-align:center !important;
					clear:both;
				}
		}	
		@media only screen and (max-width: 640px){
				body [class=erase]{
					display:none;
				}
		}	
		@media only screen and (max-width: 640px){
				body [class=buttonScale]{
					float:none !important;
					text-align:center !important;
					display:inline-block !important;
					clear:both;
				}
		}	
		@media only screen and (max-width: 640px){
				body .image600 img{
					width:100% !important;
				}
		}	
		@media only screen and (max-width: 640px){
				body td[class=image230]{
					width:230px !important;
					text-align:center !important;
					clear:both;
				}
		}	
		@media only screen and (max-width: 640px){
				body .image298 img{
					width:100% !important;
				}
		}	
		@media only screen and (max-width: 640px){
				table[class=image110]{
					text-align:center;
					float:none;
					width:70% !important;
				}
		}	
		@media only screen and (max-width: 640px){
				body td[class=pad30]{
					padding-left:25px !important;
					padding-right:25px !important;
					text-align:center !important;
					clear:both;
				}
		}	
		@media only screen and (max-width: 640px){
				body td[class=image298] img{
					width:100% !important;
					text-align:center !important;
					clear:both;
				}
		}	
		@media only screen and (max-width: 640px){
				body .h30{
					width:100% !important;
					height:30px !important;
				}
		}	
		@media only screen and (max-width: 640px){
				body .h15{
					width:100% !important;
					height:15px !important;
				}
		}	
		@media only screen and (max-width: 640px){
				body table[class=sponsor]{
					text-align:center;
					float:none;
					width:80% !important;
				}
		}	
		@media only screen and (max-width: 640px){
				body .w10{
					width:8% !important;
					height:10px !important;
				}
		}	
		@media only screen and (max-width: 640px){
				body .pad20{
					padding-left:20px !important;
					padding-right:20px !important;
				}
		}	
		@media only screen and (max-width: 640px){
				body .h65{
					width:100%;
					height:65px !important;
				}
		}</style>
<table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#000000">
  <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
    <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
      <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; background: #000000;"><!-- [if gte mso 9]>
            <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="mso-width-percent:1000;">
              <v:fill type="tile" src="images/5a2ddcd490a50untitled-2.png" ></v:fill>
              <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
                <![endif]-->
        <div style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #000000;">
          <table class="mobile" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; width: 94.979%; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
            <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
              <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; width: 100%; background: #000000;" align="center"><!-- Nav Mobile Wrapper -->
                  <table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                    <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                      <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                        <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; background: #000000;" align="center" width="100%">
                          <table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; border-collapse: collapse; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                            <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                              <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; background: #000000;" width="100%" height="70">&nbsp;</td>
                              </tr>
                            </tbody>
                          </table>
                          <table class="fullCenter" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; border-collapse: collapse; text-align: center; width: 92.5925%; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                            <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                              <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                <td class="image200" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; text-align: center; width: 100%; background: #000000;" align="center" width="100%">
                                  <table class="fullCenter" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; border-collapse: collapse; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                                    <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                      <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                        <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; background: #000000;" align="center" width="100%">
                                          <img class="editedImage" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; -webkit-user-drag: none; height: auto; width: 200px; display: block; margin-left: auto; margin-right: auto;" src="https://share1.cloudhq-mkt3.net/926cc73c732d75.png" alt="" width="80" height="106" border="0">
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; border-collapse: collapse; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                            <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                              <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; background: #000000;" width="100%" height="40">&nbsp;</td>
                              </tr>
                            </tbody>
                          </table>
<!-- Text -->
                          <table class="mobile" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; border-collapse: collapse; width: 648px; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                            <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                              <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                <td class="font32" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; font-size: 46px; color: #ffffff; text-align: center; line-height: 56px; font-weight: bold; vertical-align: top; width: 648px; background: #000000;" align="center">
                                  <span class="font44" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: #ffffff;">Welcome!</span> 
                                  <br style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #000000;">
                                  <br style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #000000;">
                                  <span class="font44" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: #ffffff; font-weight: 100;">We're glad to have you abroad</span> 
                                  <span class="font44" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: #ffffff; font-weight: 100;">...we're here to help you.</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                        <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; background: #000000;">
                          <br style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #000000;">
                        </td>
                      </tr>
                      <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                        <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; background: #000000;">
                          <br style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #000000;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
<!-- [if gte mso 9.]>
              </v:textbox>
            </v:fill>
          </v:rect>
          <![endif]-->
      </td>
    </tr>
  </tbody>
</table>
<table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background-color: #f6f6f6; z-index: 99999; top: 0px; left: 0px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#F6F6F6">
  <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
    <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
      <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word;" align="center" valign="top" width="100%">
        <table class="mobile" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; width: 59.375%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
          <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
            <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
              <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; width: 100%;" align="center">
                <table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 501px; width: 368px;" border="0" width="456" cellspacing="0" cellpadding="0" align="center">
                  <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                      <td style="-webkit-font-smoothing: antialiased; word-break: break-word; width: 367.5px; font-family: 'Open Sans', Arial, sans-serif !important;" align="center">
                        <table class="fullCenter" style="-webkit-font-smoothing: antialiased; border-collapse: collapse; width: 769px; height: 298px; font-family: 'Open Sans', Arial, sans-serif !important;" border="0" width="310" cellspacing="0" cellpadding="0" align="left">
                          <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 232px;">
                              <td class="fullCenter" style="-webkit-font-smoothing: antialiased; word-break: break-word; text-align: left; font-size: 14px; color: #828282; line-height: 22px; font-weight: 400; height: 232px; width: 768.333px; font-family: 'Open Sans', Arial, sans-serif !important;" valign="middle">
                                <p data-renderer-start-pos="550">
                                  <strong>Hello Nabil,</strong>
                                </p>
                                <p data-renderer-start-pos="564">Congratulations! Youve successfully been signed up for MEDINA UP!</p>
                                <p data-renderer-start-pos="631">Now it's time to activate your account so that you can start reaching our features:</p>
                                <ol class="ak-ol">
                                  <li>
                                    <p data-renderer-start-pos="718">Sign in to your account at 
                                      <a class="sc-VuRhl lmAaUx" href="${process.env.REACT_APP_API_URL || 'https://medina-up-testing.netlify.app'}" data-renderer-mark="true">${process.env.REACT_APP_API_URL || 'https://medina-up-testing.netlify.app'}</a>
                                    </p>
                                  </li>
                           </ol>
                                <ul class="ak-ul">
                                  <li>
                                    <p data-renderer-start-pos="778">use this current email you're using to login</p>
                                  </li>
                                  <li>
                                    <p data-renderer-start-pos="826">this is your password: 
                                      <strong data-renderer-mark="true">
                                        <u data-renderer-mark="true">${password}</u>
                                      </strong>
                                    </p>
                                  </li>
                                </ul>
                                    <ol class="ak-ol" type="I">
                                  <li>
                                    <p data-renderer-start-pos="866">You can change your account informations in the settings page</p>
                                  </li>
                                </ol>
                                <p data-renderer-start-pos="931">We're delighted to welcome you to MEDINA UP</p>
                                <br>
                                <center>
                                <p data-renderer-start-pos="976">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; See you online, 
                                <br>
                                </p>
                                <p style="-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; padding: 0px !important; margin: 0px !important;" data-renderer-start-pos="449">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Have a great day!</p>
                                <p style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; padding: 0px !important; margin: 0px !important;" data-renderer-start-pos="497">&nbsp;</p>
                                </center>
                              </td>
                            </tr>
                            <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                              <td class="buttonScale" style="-webkit-font-smoothing: antialiased; word-break: break-word; width: 768.333px; height: 10px; font-family: 'Open Sans', Arial, sans-serif !important;" align="left">&nbsp;</td>
                            </tr>
                            <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 56px;">
                              <td style="-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; width: 768.333px; height: 56px; text-align: center; font-family: 'Open Sans', Arial, sans-serif !important;" height="65">&nbsp;</td>
                            </tr>
                          </tbody>
                        </table>
                        <br style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
<table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #ffc845;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#FAC32E">
  <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
    <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
      <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word;" align="center" valign="top" width="100%">
        <table class="mobile" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 128px; width: 574px;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
          <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
            <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 98px;">
              <td class="logo" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 98px; width: 573.333px;" align="center">
                <table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; border-collapse: collapse; height: 10px; width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
                  <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                      <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px;" width="100%" height="20">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
                <table class="fullCenter" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; text-align: center; width: 90.8333%; height: 73px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
                  <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 25px;">
                      <td class="fullCenter" style="font-family: Helvetica, Arial, sans-serif, 'Open Sans'; -webkit-font-smoothing: antialiased; word-break: break-word; text-align: center; font-size: 13px; color: #ffffff; line-height: 26px; font-weight: 400; width: 100%; height: 25px;" width="100%">*|USER:ADDRESS|*</td>
                    </tr>
                    <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 0px;">
                      <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; width: 100%; height: 0px;" width="100%" height="1">&nbsp;</td>
                    </tr>
                    <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 48px;">
                      <td class="fullCenter" style="font-family: Helvetica, Arial, sans-serif, 'Open Sans'; -webkit-font-smoothing: antialiased; word-break: break-word; text-align: center; font-size: 13px; color: #ffffff; line-height: 26px; font-weight: 400; width: 100%; height: 48px;" width="100%">Regards, 
                        <br style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">The Local Support Team*
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
              <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px; width: 573.333px;" align="center">
                <table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; border-collapse: collapse; height: 10px; width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
                  <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                      <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px;" width="100%" height="10">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
              <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px; width: 573.333px;" align="center">&nbsp;</td>
            </tr>
            <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
              <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px; width: 573.333px;">&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
<table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#000000">
  <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
    <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
      <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; background: #000000;" align="center" valign="top" width="100%">
        <table class="mobile" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
          <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
            <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
              <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; background: #000000;" align="center" width="100%">
                <table class="fullCenter" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; text-align: center; height: 74px; width: 100%; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
                  <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 25px;">
                      <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 25px; background: #000000;" width="100%" height="25">&nbsp;</td>
                    </tr>
                    <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 15px;">
                      <td class="fullCenter" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; text-align: center; font-size: 12px; color: #a1a6a7; font-weight: 400; height: 15px; background: #000000;" width="100%">&nbsp;</td>
                    </tr>
                    <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 24px;">
                      <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 24px; background: #000000;" width="100%" height="24">&nbsp;</td>
                    </tr>
                    <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                      <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; height: 10px; background: #000000;" width="100%" height="1">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
`,
  };
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent!');
    }
  });
};
