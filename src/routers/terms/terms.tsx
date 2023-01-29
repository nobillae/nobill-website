import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import C7 from './images/c_7.svg'
import StampBG from './images/stamp.svg'
import BG from './images/Web_T&C.svg'
import './index.css'

function Terms() {
  return (
    <div className='h-full'>
      <Header />
      <div className='p-4 lg:p-12 termsContainer' style={{backgroundImage:BG}}>
        <p className='text-xl mt-9 font-medium'>Terms & Conditions</p>
        <p className='text-gray-400'>last updated on Jan 6, 2023</p>
        <br />
        <div className='text-xs shadow-xl leading-5 px-4 py-10 lg:px-8 bg-white lg:py-0 font-medium rounded-lg '>
          <p className='flex relative'>
            <span className='self-end'>This Agreement (“Agreement”) is entered between NoBill Technologies FZ-LLC having its
            registered office at In5 Tech, HD 14B, Dubai, through its website www.nobill.io, and
            'You' as the User on the website. The terms such as 'Company', 'Platform', and 'NoBill'
            shall be used in reference to the Platform, and the terms such as 'You', and
            'Application Developers' shall be used in reference to the User of the website.
            <br />
            <br />
            <br />
            </span>
            <img src={StampBG} alt="stamp" className='absolute lg:relative -top-20 -right-6 lg:-top-12 lg:-right-10 w-20 lg:w-30 lg:w-40' />
          </p>
          <p className='text-sm font-bold'>
            NOW, THEREFORE, IN CONSIDERATION OF THE PROMISES AND MUTUAL COVENANTS SET FORTH HEREIN,
            THE PARTIES HERETO, INTENDING TO BE LEGALLY BOUND, HEREBY AGREE AS FOLLOWS:
          </p>
          <br />
          <section>
            <br />
            <p className='text-sm font-bold'>1. SCOPE OF SERVICES: </p>
            <br />
            <p>1.1. The Platform provides the following Services (the “Services”):</p>
            <p>
              1.1.1. The Platform allows Retail Merchants to provide their customers (“Consumers”),
              whether in-store or in online stores, with Smart Digital Receipts.
            </p>
            <p>
              1.1.2. We provide merchants with insights and intelligence, as well as options for
              targeting customers through marketing/promotional campaigns.
            </p>
            <p>
              1.2. The NoBill Services is available to merchants who generate receipts
              ("Merchants"), application developers who process receipts ("Application Developers")
              in relation to their applications ("Partner Applications"), business customers and
              their representatives ("Business Customers"), and consumers who have reached the age
              of majority ("Consumers"). Business customers and consumers are also referred to as
              ("End Users") in this context.
            </p>
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>2. INTEGRATION, AND RELATIONSHIPS WITH END USERS:</p>
            <br />
            <p>
              2.1. A separate integration project ("Integration") is used to integrate the NoBill
              Service with the Partner Application. Integration is carried out using NoBill
              interfaces and in accordance with NoBill's requirements and specifications.
            </p>
            <p>
              2.2. Unless otherwise agreed in the Agreement, the Application Developer performs the
              Integration at its own expense and on its own timetable. The Application Developer
              keeps NoBill informed of the Integration's progress and promptly answers NoBill's
              questions about the Integration. When NoBill has approved the Integration, the
              Application Developer may begin using the NoBill Service.
            </p>
            <p>
              2.3. The parties must agree on how contracts with end customers will be concluded as
              part of the Integration. End users of NoBill as well as users of Partner Applications
              are examples of end users.
            </p>
            <p>
              2.4. NoBill and the Application Developer will each conclude their respective
              agreements with the end customers, and NoBill and the Application Developer will each
              act as the independent data controller for said end customers unless otherwise agreed.
              In such a case, the Application Developer is required to include the most recent
              versions of NoBill's Terms and Conditions for End Users and NoBill's Privacy Notice as
              part of the Partner Application, so that the end-customer who registers with, or
              otherwise activates or uses, the NoBill Service via the Partner Application approves
              the aforementioned Terms and Conditions and confirms having read and understood the
              Privacy Notice. The implementation of these features will be discussed in greater
              detail in conjunction with the Integration.
            </p>
            <p>
              2.5. If NoBill does not enter into its own agreement with the end customer, the
              Application Developer shall act as the sole data controller and shall be solely
              responsible for entering into all necessary agreements and/or obtaining the necessary
              consent from the Application Developer's Customers in a manner that allows NoBill to
              act as the data processor as set forth in these Terms and Conditions.
            </p>
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>3. USE OF ELECTRONIC RECEIPTS AND TRANSACTION DATA:</p>
            <br />
            <p>
              3.1. NoBill will send electronic receipts to the Partner Application in accordance
              with the terms agreed upon with the Application Developer. NoBill only transmits
              electronic receipts pertaining to the Application Developer's Customers or End Users
              who have activated the Partner Application in the NoBill Service to the Partner
              Application.
            </p>
            <p>
              3.2. Merchants may, at their discretion and at any time, prohibit the transmission of
              electronic receipts into certain Partner Applications, which the Application Developer
              acknowledges. The presence of electronic receipts from a specific Merchant in the
              Partner Application does not guarantee that electronic receipts will be provided in
              the future.{' '}
            </p>
            <p>
              3.3. The Application Developer is only permitted to use the electronic receipts and
              data contained therein transmitted via the NoBill Service for the purpose(s) specified
              in the Agreement ("Permitted Purpose(s)"). Unless otherwise agreed, the Application
              Developer shall not
              <br /> (i) share, disclose, resell, redistribute, lease, or sublicense the electronic
              receipts or any information contained therein to third parties (including on an
              aggregated level);
              <br /> (ii) create derivative works from the electronic receipts or information
              contained therein; or
              <br /> (iii) use the electronic receipts or information contained therein for
              targeting, reporting, product features, profiling, or analysis.
              <br />
              (iv) use the electronic receipts, or any information contained therein, for any other
              purpose that, in NoBill's opinion or interpretation, is unlawful or otherwise
              detrimental to the NoBill Service; or <br />
              (v) assign, sell, sublicense, lease, or otherwise transfer Application Developer's
              right to use the electronic receipts, or any information contained therein, to third
              parties.
            </p>
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>
              4. APPLICATION DEVELOPER'S PRIMARY RESPONSIBILITIES:
            </p>
            <br />
            <p>
              4.1. The Application Developer's primary responsibilities are
              <br /> (i) to provide End Users and Application Developer's Customers with electronic
              receipt inspection and viewing services, as well as other separately agreed
              value-added services based on NoBill Receipts; and
              <br /> (ii) to provide End Users with so-called first level support services in the
              event of faults or defects in the NoBill Service.
              <br /> (iii) to maintain the Integration, Partner Application, and other operational
              environments or network connections required for the operation of the NoBill Service,
              and
              <br /> (iv) to strive to ensure that End Users and Application Developer's Customers
              do not misuse the NoBill Service.{' '}
            </p>
            <p>
              4.2. The Application Developer is also responsible for ensuring that its own staff who
              interact with the NoBill Service are familiar with its basic features and operating
              principles, and are committed to data confidentiality.{' '}
            </p>
            <p>
              4.3. The Application Developer shall promptly prevent Business Customer's
              representatives who are no longer employed by the Business Customer from accessing the
              NoBill Service in connection with the Partner Application upon request of NoBill or a
              Business Customer.
            </p>
            <p>
              4.4. Furthermore, at the request of NoBill or the End User, the Application Developer
              shall delete End User data for which deletion or termination of processing has been
              requested by the End User under data protection legislation, and otherwise provide
              reasonable assistance in the fulfillment of other obligations arising from data
              protection legislation.{' '}
            </p>
            <p>
              4.5. The Application Developer defines the precise content of the services offered to
              End Users, as well as the applicable terms and fees, and is solely responsible for
              their production.
            </p>
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>
              5. MAINTENANCE, FAULTS, AND SUPPORT SERVICES OF NOBILL:
            </p>
            <br />
            <p>
              5.1. NoBill makes reasonable efforts to ensure that the NoBill Service and its
              interfaces are available 24 hours a day, every day of the year, with the exception of
              development and service windows, about which NoBill makes reasonable efforts to
              communicate well in advance.
            </p>
            <p>
              5.2. NoBill must be notified immediately in the event of a fault or defect by the
              Application Developer. In the event of a fault or defect, the Application Developer
              must also provide End Users and Application Developer's Customers with so-called
              first-level support.
            </p>
            <p>
              5.3. NoBill provides the Application Developer with the instructions and materials
              needed to provide first-level support services. If a support request cannot be
              resolved using the instructions and materials provided by NoBill, the Application
              Developer may escalate it to NoBill for so-called second-level support.
            </p>
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>6. MODIFICATIONS:</p>
            <br />
            <p>
              6.1. NoBill reserves the right to develop and modify the NoBill Service. NoBill
              reserves the right to change these Terms and Conditions by notifying you at least 90
              days in advance. If the Application Developer continues to use the NoBill Service,
              this is deemed acceptance of the updated Terms and Conditions. Modifications to other
              agreement documents must be separately agreed upon to be valid.
            </p>
            <p>
              6.2. If the NoBill Terms and Conditions for End Users and the NoBill Privacy Policy
              are made available in connection with the Partner Application for the purposes of End
              Users activating or using the NoBill Service, and NoBill notifies the Application
              Developer of changes to the same, the Application Developer shall replace the old
              Terms and Conditions and Privacy Policy with the new NoBill Terms and Conditions and
              Privacy Policy for the End Users.
            </p>
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>7. MARKETING AND REFERENCES:</p>
            <br />
            <p>
              7.1. Following the completion of the Integration, the Application Developer notifies
              its customers of the implementation of the NoBill Service.
            </p>
            <p>
              7.2. The Application Developer has the right to use trademarks referring to the NoBill
              Service in accordance with good business practices during the term of the Agreement.
            </p>
            <p>
              7.3. NoBill has the right to use the Application Developer's name or logo, as well as
              the parties' cooperation, as a reference in accordance with good business practices,
              based on this Agreement.
            </p>
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>8. FEES AND EXPENSES: </p>
            <br />
            <p>
              8.1. NoBill's fees from the Application Developer are specified in the Agreement.
              Unless otherwise agreed, both parties are responsible for their own expenses related
              to this Agreement and its execution (including expenses relating to the devices,
              software, or network connections required for the use of NoBill).
            </p>
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>9. DATA PROTECTION:</p>
            <br />
            <p>
              9.1. NoBill complies with UAE data protection laws including but are not limited to
              Federal Decree Law No. 45 of 2021. NoBill processes the personal data of Application
              Developer end-customers in accordance with its Terms and Conditions for End Users as
              the controller, to the extent end-customers of the Application Developer enter into
              separate agreements with NoBill. Insofar as the Application Developer acts as an
              independent controller in relation to End Users, it is responsible for processing
              personal data in accordance with this Agreement and data protection legislation.
            </p>
            <p>
              9.2. Unless otherwise agreed between NoBill and the Application Developer, when the
              Application Developer acts as the sole controller and NoBill as the processor of
              personal data relating to the Application Developer's Customers, the following shall
              apply:
            </p>
            <p>
              9.2.1. NoBill's rights and obligations are:
              <br />
              (i) NoBill processes personal data on behalf of the Application Developer under this
              Agreement in accordance with data protection legislation and this Agreement.
              <br />
              (ii) NoBill only processes personal data in accordance with documented instructions
              provided by the Application Developer, unless otherwise required by applicable
              mandatory legislation. This Agreement will serve as written instructions.
              <br />
              (iii) NoBill ensures that individuals authorized to process personal data are either
              committed to complying with the obligation of secrecy or are subject to an appropriate
              statutory obligation of secrecy.
              <br />
              (iv) NoBill will take mandatory technical and organizational measures, such as
              security measures, concerning the processor to ensure the security of the processing.
              <br />
              (v) NoBill assists the Application Developer in ensuring that the obligations imposed
              on the Application Developer as a controller regarding processing security,
              notification of data breaches to data subjects and authorities, and conducting an
              impact assessment and the related prior consultation are met in relation to NoBill
              processing, taking into account the nature of the processing and the information
              available to the processor.
              <br />
              (vi) NoBill assists the Application Developer, upon request, in complying with the
              requirements of data protection legislation that pertain to the Application Developer,
              or in verifying or demonstrating compliance by the Application Developer with such
              requirements, and makes all information available to the Application Developer that is
              required to act as a processor and demonstrate compliance with the legislation.
              <br />
              (vii) NoBill will delete or return any personal data that is no longer required for
              processing after the end of the Agreement between the Application Developer and NoBill
              unless otherwise required by mandatory legislation applicable to NoBill.
              <br />
              (viii) NoBill permits and participates in audits conducted by the Application
              Developer or another authorized auditor of the Application Developer.
              <br />
              (ix) NoBill shall notify the Application Developer without undue delay if it receives
              information about a personal data breach or if it believes that the Application
              Developer's instructions for the processing of personal data are unlawful.
              <br />
              (x) NoBill must keep a list of the processors it uses on the Platform. The addition of
              new processors may be opposed by the controller.
              <br />
              (xi) NoBill shall be liable to the Application Developer for any personal data
              processing activities carried out by NoBill's other processor;
            </p>
            <p>
              9.2.2. The Developer's rights and obligations are: <br />
              (i) Personal data must be processed by the Application Developer in accordance with
              applicable data protection legislation and good personal data processing practices.
              <br />
              (ii) The Application Developer is required to provide NoBill with written instructions
              and necessary information regarding the processing of personal data at its own
              expense.
              <br /> (iii) The Application developer is responsible for all of the data controller's
              obligations under data protection legislation in relation to data subjects (including
              informing data subjects about the processing of personal data) and NoBill, as well as
              ensuring that its instructions on the processing of personal data comply with data
              protection legislation. <br />
              (iv) The Application Developer represents and warrants that it has the legal authority
              to provide personal data to NoBill.
              <br /> (v) The Application Developer represents and warrants that it has obtained the
              necessary consent from its customers for NoBill to process personal data in accordance
              with these Terms and Conditions;
              <br /> (vi) The Application Developer grants NoBill permission to process the personal
              data it has provided in accordance with these Terms and Conditions.
            </p>
            <p>
              9.2.3. Personal data processing instructions provided by the application developer:
              <br />
              (i) NoBill must process personal data relating to the Application Developer's
              Customers in order to identify the electronic receipts of the Application Developer's
              Customers among other electronic receipts processed by NoBill and transmit them
              onwards in the manner agreed in detail with the Application Developer in connection
              with the Integration or otherwise. <br />
              (ii) NoBill reserves the right to include advertisements, feedback functions, loyalty
              elements, or other interactive or value-added features or services in the electronic
              receipts of the Developer's Customers.
              <br /> (iii) NoBill has the right to generate anonymous statistical data from the
              Application Developer's Customers' electronic receipts and to provide such anonymous
              data to Merchants with whom the Application Developer's Customers have transacted.
              <br />
              (iv) NoBill processes personal data pertaining to Application Developer's Customers'
              electronic receipts and the information contained therein, such as the seller and its
              contact information, purchases with prices and taxes, the time when the receipt was
              issued, the receipt identifier, and the payment card used in connection with the
              purchase, and other customary information on the receipt.
            </p>
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>10. DATA SECURITY:</p>
            <br />
            <p>
              10.1. NoBill employs standard security policies such as data encryption or hashing and
              limited backups. NoBill reserves the right to temporarily disable access to the NoBill
              Service if <br />
              (i) the Application Developer or the devices or software used by the Application
              Developer threaten the data security of the NoBill Service or third parties, or <br />
              (ii) a serious information security threat is directed at the NoBill Service.
            </p>
            <p>
              10.2. The Application Developer shall notify NoBill of any complaint or request made
              by a data subject, a regulator, or any other person requesting access to any data
              within the scope of this Agreement, including but not limited to personal data, within
              24 hours of becoming aware of it.
            </p>
            <p>
              10.3. Any breach of data within the scope of this Agreement, including but not limited
              to personal data, must be reported to NoBill within 24 hours of becoming aware of it.
            </p>
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>11. INTELLECTUAL PROPERTY RIGHTS:</p>
            <br />
            <p>
              11.1. NoBill's intellectual property rights are owned by NoBill or its licensors
              (including copyright, databases, trademarks, design rights, patents, utility models,
              domain names, and the applications for such).
            </p>
            <p>
              11.2. The NoBill Service may be used by the Application Developer only in accordance
              with the Agreement and for the duration of the Agreement. NoBill Service and its
              background software contain business secrets of NoBill and third parties, such as the
              source code of the software, the specific design of the software components,
              structural formula and logic, programming techniques, and related documents. It is
              forbidden to copy, disassemble, inspect, or reverse engineer the NoBill Service or its
              background software. The Application Developer agrees not to use any open-source code
              components that may impose obligations to disclose the source code of the background
              software of the NoBill's Service.
            </p>
            <p>
              11.3. If a third party claims that the NoBill Service violates its intellectual
              property rights, NoBill reserves the right to <br />
              (i) obtain the necessary licenses to continue providing NoBill, <br />
              (ii) modify the NoBill Service to eliminate the infringement, or <br />
              (iii) terminate the Agreement with immediate effect. NoBill has no other
              responsibilities or obligations in such cases.
            </p>
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>12. CONFIDENTIALITY:</p>
            <br />
            <p>
              12.1. The parties agree to keep confidential any material and information received
              from the other party that has been marked as confidential or should be understood to
              be confidential, including material received from NoBill's Co-operation Partners
              ("Confidential Information").
            </p>
            <p>
              12.2. Information that
              <br /> (i) is generally available or otherwise public,
              <br /> (ii) was received from a third party without a confidentiality obligation,
              <br /> (iii) was in the receiving party's possession prior to receiving it from the
              other party, with no confidentiality obligation applicable, or
              <br /> (iv) which the other party independently developed without using the other
              party's Confidential Information, is not considered Confidential Information.
            </p>
            <p>
              12.3. The parties agree not to use Confidential Information for any purpose other than
              those specified in the Agreement and only for those stated in the Agreement during the
              term of the Agreement. The parties shall use the same care and protection in relation
              to Confidential Information as they do in relation to their own similar information
              but in no event less than a reasonable degree of care.
            </p>
            <p>
              12.4. Parties must also put in place and maintain safeguards to prevent unauthorized
              access, destruction, loss, or alteration of Confidential Information. Each party shall
              promptly notify the other of any breach or potential breach of security relating to
              the Confidential Information, and shall investigate and remedy the consequences of
              such breach or potential breach.
            </p>
            <p>
              12.5. After the Agreement expires, the parties must promptly return any Confidential
              Information received from the other party or verifiably destroy it.
            </p>
            <p>
              12.6. Parties must ensure that their employees follow the confidentiality obligations
              outlined in Section 12.
            </p>
            <p>
              12.7. The obligations outlined in this Section 12 will be in effect for the duration
              of the Agreement and, in any case, for three (3) years from the date of disclosure of
              the Confidential Information, even if the Agreement expires earlier. This section does
              not limit a party's statutory obligations concerning business or trade secrets.
            </p>
            <p>
              12.8. Despite the provisions of this Section 12, a party may use the data collected
              through the use of the NoBill Service in its own business operations and disclose to
              third parties or otherwise publish the data, provided that the data is anonymized or
              otherwise used in a way that does not jeopardize the protection of a party's
              Confidential Information.
            </p>
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>13. LIMITATIONS OF LIABILITY:</p>
            <br />
            <p>
              13.1. The NoBill Service is used at the Application Developer's own risk. To the
              extent permitted by applicable law, the NoBill Service is provided "as is," with no
              warranties as to its availability, usability, accuracy, or applicability for specific
              purposes.
            </p>
            <p>
              13.2. NoBill is not liable for direct or indirect damages such as data loss or
              recreation, loss of profit or interest, revenue decrease, reputational harm, cover
              purchases, third-party injuries, or other unforeseeable damages.
            </p>
            <p>
              13.3. Neither the Platform nor the Company, nor any other person, representatives, or
              agents associated with, or even employees involved with, the Platform, shall be liable
              for any direct, indirect, punitive, special, consequential, or other types of harm
              arising from or related to the Platform's accessibility.
            </p>
            <p>
              13.4. You agree to indemnify, defend, and hold harmless NoBill and its affiliates, as
              well as their respective directors, officers, owners, agents, co-branders or other
              partners, employees, information providers, licensors, licensees, consultants,
              contractors, and other applicable third parties (collectively "Indemnified Parties")
              from and against any and all claims, demands, causes of action, debt, or liability,
              including without limitation attorney's fees.
            </p>
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>14. TERMINATION:</p>
            <br />
            <p>
              14.1. The Agreement remains in effect until further notice or for the period specified
              in the Agreement. A non-fixed term Agreement may be terminated for convenience by
              either party with six months' notice. During the notice period, the terms of the
              Agreement must be followed.
            </p>
            <p>
              14.2. Both parties have the right to immediately terminate the Agreement for cause if
              <br />
              (i) the other party has materially breached the Agreement and has not corrected its
              behavior within 14 days of receiving the other party's written notification of a
              contract breach, or <br />
              (ii) the other party goes bankrupt, is placed in corporate debt reorganization, or
              otherwise becomes unable to meet its responsibilities under the Agreement.
            </p>
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>15. FORCE MAJEURE: </p>
            <br />
            <p>
              15.1. A party is not liable for any delay or damage caused by an obstacle outside of
              its control, which a party could not reasonably have been expected to consider at the
              time of entering into the Agreement, and the consequences of which the party could not
              reasonably prevent or overcome, and as a result of which the party's obligations or
              responsibilities become unreasonably difficult or impossible to fulfill. War,
              demonstration, labor dispute, strike, industrial action, fire, natural disaster,
              communications disruption, or another similar event are examples of force majeure. If
              a Force Majeure has had or will have an impact on the fulfillment of the Agreement for
              at least 30 days, a party has the right to terminate this Agreement with immediate
              effect.
            </p>
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>16. NOTICE:</p>
            <br />
            16.1. When a party is required to give another party a notice, demand, consent,
            approval, or communication under this Agreement (Notice), such Notice must be given
            either by hand delivery, prepaid post, email, or, in the case of NoBill issuing a
            notice, through the NoBill platform to the recipient's address for Notices (the address
            specified above in the case of NoBill, and the address specified in the Merchant's
            NoBill platform account in the case of Merchant).
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>17. GOVERNING LAW:</p>
            <br />
            17.1. This Agreement shall be governed under the Laws of UAE and shall be subject to the
            jurisdiction of the courts of Dubai, UAE.
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>18. DISPUTE RESOLUTION:</p>
            <br />
            <p>
              18.1. If a dispute, confusion, or difference arises from, out of, or in relation to
              the terms specified in the Terms and Conditions (hereinafter "Dispute"), NoBill and
              You (collectively referred to as "Parties") will attempt to resolve such Dispute
              amicably through mediation as soon as possible.
            </p>
            <p>
              18.2. If all other processes fail, the parties must resort to arbitration for
              effective and binding dispute resolution. The Arbitrators must be chosen jointly
              within two months.
            </p>
            <p>18.3. The arbitration proceedings will be conducted in English.</p>
            <p>
              18.4. The proceedings relating to the provisions of this clause will be held in the
              court of Dubai, UAE.
            </p>
            <p>
              18.5. Unless otherwise specified in the award, both parties are to bear equally the
              costs of the arbitration, including the fees of the arbitrators.{' '}
            </p>
            <p>
              18.6. The Awards and Proceedings must be carried out in accordance with the Act's
              provisions.
            </p>
            <p>18.7. The Award issued jointly by the Arbitrators is to be considered final.</p>
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>19. SEVERABILITY:</p>
            <br />
            <p>
              19.1. If any provision of this Agreement is held to be invalid or unenforceable for
              any reason, such provision shall, if possible, be conformed to prevailing law rather
              than voided in order to achieve the Parties' intent, and the remaining provisions of
              this Agreement shall remain in full force and effect and shall be binding upon the
              Parties hereto.
            </p>
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>20. NO WAIVER:</p>
            <br />
            <p>
              20.1. All rights granted to either Party under this Agreement or any other document
              delivered hereunder or in connection herewith, or granted to it by law or equity, are
              and shall be cumulative, and may be exercised separately or concurrently and from time
              to time without waiver of any other remedies. Unless expressly stated in a written
              instrument signed by the waiving Party, neither Party shall be deemed to have waived
              any right, power, or privilege under this Agreement. The failure of either Party to
              enforce any provision of this Agreement shall not be construed as a waiver of such
              provision or a waiver of such Party's right to enforce such provision or any other
              provision of this Agreement in the future.
            </p>
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>21. ASSIGNMENT:</p>
            <br />
            <p>
              21.1. Neither Party shall have the right to assign or transfer this Agreement or any
              rights or obligations hereunder without the prior written consent of the other Party.
            </p>
          </section>
          <section>
            <br />
            <p className='text-sm font-bold'>22. UPDATES</p>
            <br />
            <p>
              22.1. In case there are any updates to the terms and conditions, the Developers will
              be notified through the app and the Portal and their consent will be recorded.
            </p>
          </section>
        </div>
        <br />
        <br />
        <div className='px-6 py-10 bg-[#19172E] rounded-tr-lg rounded-tl-lg text-white'>
          <p className='text-3xl font-bold'>Get in touch</p>
          <br />
          <div className='flex gap-x-3'>
            <img src={C7} alt='email' />
            <span>help@nobill.io</span>
          </div>
        </div>
      </div>
      <div className='px-6 py-10 bg-[#F4F3F5] '>
        <br />
        <Footer />
      </div>
    </div>
  )
}

export default Terms
