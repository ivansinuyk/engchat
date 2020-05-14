import React from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../../components/Header';
import TextBold from '../../components/TextBold';
import TextDefault from '../../components/TextDefault';
import {termsandservice} from '../../resource/style';

const Terms = ({navigation}) => (
  <View style={{backgroundColor: '#FFFFFF'}}>
    <Header
      navigate={() => navigation.goBack()}
      title={'Terms of Service'}
      icon={'chevron-thin-left'}
    />
    <ScrollView>
      <View style={termsandservice}>
        <TextBold>Terms of Service</TextBold>
        <TextDefault>
          These terms of service became effective on 28 May 2019.
        </TextDefault>
        <TextDefault>
          Coronavirus spread provides an integrated caller ID service for the
          active blocking of spam and unwanted calls with the ability to
          integrate your social media profile and search contacts within our
          directory. Please read our Terms of Service so you can clearly
          understand how we operate and what conduct we expect from you when
          using our service. You agree to our Terms of Service (“Terms”) by
          installing, accessing, or using the Coronavirus spread mobile
          application, features, software, or website (together, “Services”).
        </TextDefault>
        <TextDefault>
          On the condition that you comply with all your obligations under these
          Terms, including, but not limited to, the User Code of Conduct listed
          below, we grant you a limited, revocable, nonexclusive, nonassignable,
          nonsublicenseable license and right to utilise Coronavirus service
          Services, through a mobile device or application.
        </TextDefault>
        <TextDefault>
          Any other use contrary to our purpose is strictly prohibited and a
          violation of the Terms. We reserve all rights not expressly granted in
          the Terms, including, without limitation, title, ownership,
          intellectual property rights, and all other rights and interest in our
          Services, and all related items.
        </TextDefault>
        <TextBold>1. Termination</TextBold>
        <TextDefault>
          The license for use of the Services provided herein is effective until
          terminated. You may terminate your license at any time by removing the
          Coronavirus spread mobile application from your devices. This license
          will terminate upon conditions set forth elsewhere within the Terms or
          if you fail to comply with any of the Terms. In such event, no notice
          shall be required by Coronavirus spread to effect such termination.
        </TextDefault>
        <TextBold>2. Premium Services</TextBold>
        <TextDefault>
          Our Coronavirus spread mobile application is offered to you free of
          charge. However we may offer in the future access to various features,
          functionality, and services which are in addition to the features and
          functionality available with a free account. Coronavirus spread may
          charge fees for such access (“Premium Services”) either directly or
          through an App store such as, but not limited to, The Apple App Store
          or Google App store.
        </TextDefault>
        <TextDefault>
          Upon selecting Premium Services, you agree to pay the applicable fees
          (including, without limitation, periodic fees for Premium Services) as
          they become due plus all related taxes. You may cancel your Premium
          Services account by unsubscribing from the Service before your renewal
          date. Cancellation will end billing and remove your access to the
          Premium Services at the end of your current billing. All fees and
          charges are non-refundable and there are no refunds or credits for
          partially used periods.
        </TextDefault>
        <TextBold>3. Eligibility</TextBold>
        <TextDefault>
          To be eligible to use the Services, you must meet the following
          criteria and represent and warrant that you:
        </TextDefault>
        <TextDefault>- are 18 years of age or older;</TextDefault>
        <TextDefault>
          - are not currently residing in a prohibited territory restricted from
          the Services;
        </TextDefault>
        <TextDefault>
          - have full power and authority to enter into our Terms;
        </TextDefault>
        <TextDefault>
          - will not violate any rights of Coronavirus spread including
          intellectual property rights such as copyright or trademark rights;
        </TextDefault>
        <TextDefault>
          - agree to provide at your cost all equipment, software, and internet
          access necessary to use the Services.
        </TextDefault>
        <TextBold>4. Privacy</TextBold>
        <TextDefault>
          You acknowledge that you have read our Privacy Policy. Our most recent
          updated Privacy Policy can be found here.
        </TextDefault>
        <TextBold>5. Coronavirus spread Code of Conduct</TextBold>
        <TextDefault>
          Any fraudulent, abusive, or otherwise illegal activity, or violation
          of our Code of Conduct is grounds for termination at Coronavirus
          spread’s sole discretion, and you may be reported to appropriate
          authorities. We do not tolerate any of the following conduct:
        </TextDefault>
        <TextDefault>
          - Be dishonest or act in a fraudulent manner by uploading
          inappropriate, inaccurate, or objectionable content;
        </TextDefault>
        <TextDefault>
          - Publish inaccurate information in the designated fields on the
          profile form;
        </TextDefault>
        <TextDefault>
          - Create a user profile for anyone other than yourself as a natural
          person;
        </TextDefault>
        <TextDefault>
          - Create a user profile for anyone other than yourself as a natural
          person;
        </TextDefault>
        <TextDefault>- Harass, abuse or harm another person/User;</TextDefault>
        <TextDefault>- Upload a profile image that is not yours;</TextDefault>
        <TextDefault>
          - Reverse engineer, decompile, disassemble, decipher or otherwise
          attempt to derive the source code for any underlying intellectual
          property used to provide our Services;
        </TextDefault>
        <TextDefault>
          - Reverse engineer, decompile, disassemble, decipher or otherwise
          attempt to derive the source code for any underlying intellectual
          property used to provide our Services;
        </TextDefault>
        <TextDefault>
          - Reverse engineer, decompile, disassemble, decipher or otherwise
          attempt to derive the source code for any underlying intellectual
          property used to provide our Services;
        </TextDefault>
        <TextDefault>
          - Collect, use, copy, sell, distribute or transfer any information,
          including, but not limited to, Personally Identifiable Information
          obtained our Services except as expressly permitted in the Terms or as
          the owner of such information may expressly permit;
        </TextDefault>
        <TextDefault>
          - Use manual or automated software, devices, scripts, bots, robots,
          other means or processes to access, “scrape,” “crawl” or “spider” the
          Services or to add or download contacts;
        </TextDefault>
        <TextDefault>
          - Engage in “framing,” “mirroring,” or otherwise simulating the
          appearance or function of the Services;
        </TextDefault>
        <TextDefault>
          - Engage in any action that directly or indirectly interferes with the
          integrity of our Services, including but not limited to any attempts
          to access or hack our servers or network.
        </TextDefault>
        <TextBold>6. Indemnification</TextBold>
        <TextDefault>
          You indemnify us and hold us harmless for all damages, losses and
          costs (including, but not limited to, reasonable legal fees and costs)
          related to all third party claims, charges, and investigations, caused
          by (1) your failure to comply with our Terms, including, without
          limitation, that anything you submit or contribute violate the rights
          of any third party or applicable laws; (2) any use or content you
          submit via our Services; (3) any activity in which you engage on or
          through the Services and (4) any misrepresentation made by you. You
          will cooperate as fully as required by us in the defense or settlement
          of any claim.
        </TextDefault>
        <TextDefault>
          You agree to indemnify and hold Coronavirus spread, and its
          subsidiaries, affiliates, officers, agents or other partners, and
          employees, harmless from any claim or demand, including reasonable
          legal fees, made by any third party due to or arising out of content,
          data, or information you submit, contribute, post to or transmit to or
          through the Services and your use of or connection to same, your
          violation of the Terms of Use, or your violation of any rights of
          another person or entity.
        </TextDefault>
        <TextBold>7. Disclaimer of Warranties</TextBold>
        <TextDefault>
          EXCEPT AS EXPRESSLY PROVIDED OTHERWISE IN A WRITTEN AGREEMENT BETWEEN
          YOU AND Coronavirus spread, OUR SERVICES ARE PROVIDED “AS IS” AND
          WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED. TO THE
          FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, Coronavirus
          spread DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT
          NOT LIMITED TO, IMPLIED WARRANTIES, FITNESS FOR A PARTICULAR PURPOSE,
          DATA ACCURACY, TITLE, QUIET ENJOYMENT OR THE WARRANTY OF
          NON-INFRINGEMENT. WITHOUT LIMITING THE FOREGOING, Coronavirus spread
          DOES NOT WARRANT THAT THE FUNCTIONS CONTAINED IN OR AVAILABLE ON, IN
          OR THROUGH THE Coronavirus spread MOBILE APPLICATION AND OR ANY
          SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE
          CORRECTED, OR THAT THE Coronavirus spread MOBILE APPLICATION OR
          SERVICES OR THE SERVERS THAT MAKE SUCH AVAILABLE ARE FREE OF VIRUSES
          OR OTHER HARMFUL COMPONENTS. Coronavirus spread DOES NOT WARRANT OR
          MAKE ANY REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF THE USE
          OF THE SERVICES IN TERMS OF THEIR CORRECTNESS, ACCURACY, RELIABILITY,
          OR OTHERWISE. ALTHOUGH Coronavirus spread MAKES EFFORTS TO PREVENT
          PERSONALLY IDENTIFIABLE INFORMATION FROM BEING DISCLOSED, Coronavirus
          spread MAKES NO WARRANTY FOROTHER USERS WHO SUBMIT CONTACT INFORMATION
          FOR YOU AND OTHERS.AS PART OF THE CONTACT SHARING ASPECT OF OUR
          SERVICES, WE MAY PROVIDE SELECTED PERSONAL PROFILE INFORMATION WHICH
          MAY BE VIEWABLE TO OTHER USERS OR MEMBERS IN OUR DIRECTORY. APPLICABLE
          LAW MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE
          EXCLUSION MAY NOT APPLY TO YOU. WITHOUT LIMITATION OF THE FOREGOING,
          YOU ACKNOWLEDGE THAT AS A SERVICE, WE MAY INCLUDE LINKS TO OTHER THIRD
          PARTIES AND THAT Coronavirus spread HAS NO CONTROL OVER, AND MAKES NO
          REPRESENTATIONS OF ANY KIND WHATSOEVER, REGARDING THE CONTENT OR
          CONDUCT OF SUCH THIRD PARTIES AND YOU HEREBY IRREVOCABLY WAIVE ANY
          CLAIM AGAINST US RELATED TO THIRD PARTIES.
        </TextDefault>
        <TextBold>8. Limitation of Liability</TextBold>
        <TextDefault>
          NOTHING IN THESE TERMS OF USE EXCLUDES OR LIMITS OUR LIABILITY FOR
          DEATH OR PERSONAL INJURY ARISING FROM OUR NEGLIGENCE, OR OUR FRAUD OR
          FRAUDULENT MISREPRESENTATION, OR ANY OTHER LIABILITY THAT CANNOT BE
          EXCLUDED OR LIMITED BY ENGLISH LAW.
        </TextDefault>
        <TextDefault>
          TO THE EXTENT PERMITTED BY LAW, WE EXCLUDE ALL CONDITIONS, WARRANTIES,
          REPRESENTATIONS OR OTHER TERMS WHICH MAY APPLY TO OUR SERVICES OR ANY
          CONTENT ON IT, WHETHER EXPRESS OR IMPLIED.
        </TextDefault>
        <TextDefault>
          WE WILL NOT BE LIABLE TO ANY USER FOR ANY LOSS OR DAMAGE, WHETHER IN
          CONTRACT, TORT (INCLUDING NEGLIGENCE), BREACH OF STATUTORY DUTY, OR
          OTHERWISE, EVEN IF FORESEEABLE, ARISING UNDER OR IN CONNECTION WITH
          USE OF, OR INABILITY TO USE THE Coronavirus spread SERVICES.
        </TextDefault>
        <TextBold>9. Misuse of the Coronavirus spread Services</TextBold>
        <TextDefault>
          Coronavirus spread along with its respective partners and affiliates
          reserve the right to investigate suspected violations of our Terms,
          and may seek to gather information from the user who is suspected of
          violation, and from any other user. We will collect and use any such
          information in accordance with our Privacy Policy.
        </TextDefault>
        <TextDefault>
          In its sole discretion, Coronavirus spread may restrict, suspend or
          terminate the account of any User who abuses or misuses the Services.
          Misuse for example may include, without limitation, creating multiple
          or false accounts; using the Site or infringing any intellectual
          property rights, violating any aspect of the Code of Conduct, or any
          other behaviour that Coronavirus spread, in its sole discretion, deems
          inappropriate.
        </TextDefault>
        <TextDefault>
          BY ACCEPTING OUR TERMS OF USE YOU WAIVE AND HOLD HARMLESS Coronavirus
          spread, ITS RESPECTIVE PARTNERS AND AFFILIATES FROM ANY CLAIMS
          RESULTING FROM ANY ACTION TAKEN BY Coronavirus spread DURING OR AS A
          RESULT OF ITS INVESTIGATIONS AND/OR FROM ANY ACTIONS TAKEN AS A
          CONSEQUENCE OF INVESTIGATIONS BY EITHER Coronavirus spread OR LAW
          ENFORCEMENT AUTHORITIES.
        </TextDefault>
        <TextBold>General Terms</TextBold>
        <TextBold>1. Terms of use</TextBold>
        <TextDefault>
          1.1. Please read these General Terms carefully before you start to use
          our Services.
        </TextDefault>
        <TextDefault>
          1.2. By using our Services, you confirm that you accept our Terms and
          that you agree to comply with them.
        </TextDefault>
        <TextDefault>
          1.3. If you do not agree to these terms of use, please do not install
          or register your profile with the Coronavirus spread mobile
          application.
        </TextDefault>
        <TextBold>2. Other applicable terms</TextBold>
        <TextDefault>
          2.1. Your use of the Coronavirus spread Services is subject to these
          terms in their entirety and by using our Services you agree to be
          bound by them.
        </TextDefault>
        <TextDefault>
          2.2. You need to register with us to fully access our Services and
          provide as a minimum your real name, e-mail address, and mobile
          number. The details provided by you on registration or changed at any
          later time must be correct and complete.
        </TextDefault>
        <TextDefault>
          2.3. Our use of your personal information is governed by our Privacy
          Policy foundation.
        </TextDefault>
        <TextBold>3. Severability</TextBold>
        <TextDefault>
          3.1. Each of the provisions of these Terms are distinct and severable
          from the others. If at any time one or more of those provisions is or
          become invalid, unlawful or unenforceable (whether wholly or partly),
          the validity, lawfulness and enforceability of the remaining
          provisions (or the same provision to any other extent) will not be
          affected or impaired in any way.
        </TextDefault>
        <TextDefault>
          3.2. We may agree to amend these Terms of use in order to ensure the
          terms are valid, lawful and enforceable.
        </TextDefault>
        <TextBold>4. Information about us</TextBold>
        <TextDefault>
          4.1. Coronavirus spread LLP are registered in England and Wales under
          company number OC420032 and have our registered office at 86 Jermyn
          Street, SW1Y 6AW, London.
        </TextDefault>
        <TextBold>5. Changes to these terms</TextBold>
        <TextDefault>
          5.1 We may revise these Terms at any time by amending this page.
        </TextDefault>
        <TextDefault>
          5.2. Please check this page from time to time to take notice of any
          changes we made, as they are binding on you.
        </TextDefault>
        <TextBold>6. Accuracy of our Services</TextBold>
        <TextDefault>
          6.1. We cannot guarantee that our Services, or any content on it, will
          be free from errors or omissions.
        </TextDefault>
        <TextBold>7. Accessing our Services</TextBold>
        <TextDefault>
          7.1. Our mobile application with the standard functionality is
          currently made available free of charge.
        </TextDefault>
        <TextDefault>
          7.2. We do not guarantee that our Services will always be available or
          be uninterrupted.
        </TextDefault>
        <TextDefault>
          7.3. You are responsible for making all arrangements necessary for you
          to have access to our Services.
        </TextDefault>
        <TextDefault>
          7.4. We do not represent that our Services will be available in other
          locations. We may limit the availability of our Services or specific
          functionality to any user or geographic area at any time. If you
          choose to access our Services from a prohibited jurisdiction, you do
          so at your own risk.
        </TextDefault>
        <TextBold>8. Intellectual property rights</TextBold>
        <TextDefault>
          8.1. For the purposes of these Terms, "Intellectual Property Rights"
          means all patents, rights to inventions, utility models, copyright and
          related rights, trademarks, service marks, trade, business and domain
          names, rights in trade dress or get-up, rights in goodwill or to sue
          for passing off, unfair competition rights, rights in designs, rights
          in computer software, database rights, semi-conductor topography
          rights, moral rights, rights in confidential information (including
          know-how and trade secrets) and any other intellectual property
          rights, in each case whether registered or unregistered and including
          all applications for and renewals or extensions of such rights, and
          all similar or equivalent rights or forms of protection in any part of
          the world.
        </TextDefault>
        <TextDefault>
          8.2. Our Services are protected by copyright laws and international
          copyright treaties, as well as other intellectual property laws.
        </TextDefault>
        <TextDefault>
          8.3. Our trademarks may not be used in connection with any product or
          service that is not ours, in any manner that is likely to cause
          confusion among customers, or in any manner that has a detrimental
          effect on Coronavirus spread. All other trademarks not owned by
          Coronavirus spread that may appear on our Services are the property of
          their respective owners, who may or may not be affiliated with,
          connected to, or sponsored by us.
        </TextDefault>
        <TextBold>9. Viruses</TextBold>
        <TextDefault>
          9.1. We do not guarantee that our site will be secure or free from
          bugs or viruses.
        </TextDefault>
        <TextDefault>
          9.2. You are responsible for configuring your mobile device in order
          to access our Services. You should ensure your mobile device is
          adequately protected with suitably updated virus protection software.
        </TextDefault>
        <TextBold>10. Third party links</TextBold>
        <TextDefault>
          10.1. Where our Services may contain links to other sites and
          resources provided by third parties, these links are provided for your
          information only.
        </TextDefault>
        <TextDefault>
          10.2. We have no control over the contents of those third party sites
          or resources.
        </TextDefault>
        <TextBold>11. Applicable law</TextBold>
        <TextDefault>
          11.1 You and we both agree to that the courts of England and Wales
          will have non-exclusive jurisdiction.
        </TextDefault>
        <TextBold>12. Accessing our Terms in different languages</TextBold>
        <TextDefault>
          12.1. We provide our Services internationally, additional Terms of
          Services may apply to Users in different jurisdictions and where
          possible we do our best to offer localised Terms for your territory.
          Please check for our Terms in other languages on our site or in
          application if available. If not available, our Terms will default to
          the English language version.
        </TextDefault>
        <TextBold>13. Contact us</TextBold>
        <TextDefault>
          To contact us, please email coronadigis@gmail.com
        </TextDefault>
      </View>
    </ScrollView>
  </View>
);

export default Terms;
