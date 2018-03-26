import phone from '../../../images/contact-phone.jpg';
import consult from '../../../images/working-at-table.jpg';
import review from '../../../images/office-pen-calculator-computation.jpeg';
import tools from '../../../images/tool-work-bench-hammer-pliers.jpeg';

export default () => {
  return {
    topicRow: [
      {
        id: 1,
        title: 'Schedule a kick-off call',
        body: 'Let us get to know your clinic',
        image: phone,
        caption: 'contact us',
        linkUrl: 'contact-us'
      },
      {
        id: 2,
        title: 'Free Consultation',
        body: 'Discuss if we are right for each other',
        image: consult,
        caption: 'contact us',
        linkUrl: 'contact-us'
      },
      {
        id: 3,
        title: 'Let us review your eCW',
        body: 'Free review of frequently found implementation over sights',
        image: review,
        caption: 'contact us',
        linkUrl: 'contact-us'
      },
      {
        id: 4,
        title: 'Our Toolbox',
        body: 'See what we have to offer',
        image: tools,
        caption: 'services',
        linkUrl: 'services'
      }
    ]
  }
}