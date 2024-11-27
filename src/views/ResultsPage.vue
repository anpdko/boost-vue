<template>
  <div class="results">
    <HeaderApp :img="headerImg">
      BOOST RESULTS
    </HeaderApp>
    <div class='container'>
      <div class="content">
        <center><h4> </h4></center>
        <p><b>  </b></p>
        <p>  </p>
      </div>
      <div class="results-section">
        <ResultCard v-for="(result, index) in results"
                    :key="index"
                    :title="result.title"
                    :description="result.description || ''"
                    :links="result.links"
                    :imageSrc="result.imageSrc"
                    :nestedLinks="result.nestedLinks"/>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
  import { defineComponent } from 'vue';
  import HeaderApp from '@/components/HeaderApp.vue';
  import ResultCard from '@/components/ResultCard.vue';
  import headerImg from "@/assets/header.jpg";

  type Result = {
    title: string;
    description?: string;
    imageSrc?: string;
    links: { name: string; url: string }[];
    nestedLinks?: { name: string; url: string }[];
  };

  export default defineComponent({
    data() {
      return {
        headerImg,
        results: [
          {
            title: "1. Workshops on IT and Tech Support (University of Applied Sciences in Elbląg)",
            //description: "Deliverable description for Workshop 1",
            links: [
              { name: 'Moodle on Debian Linux', url: 'https://drive.google.com/file/d/1pH6HvqG6VXjl3SPY9yefJ4PL9sgClpb7/view?usp=sharing' },
              { name: 'Moodle on Debian Linux + UA', url: 'https://drive.google.com/file/d/1wIhBtGIdBvAYxXtV_G2cJQ8t4BIGYcOC/view?usp=sharing' },
              { name: 'Possible uses of the Quiz component', url: 'https://drive.google.com/file/d/1ur00QM_SF250YZNjGuB4VnC14yx4PsCw/view?usp=sharing' },
              { name: 'RF Moodle Administration and Managemen UA translation', url: 'https://drive.google.com/file/d/1HejDPV2KBEfMg2bHojWQ8Xzv0qToToak/view?usp=sharing' },
              { name: 'RF Moodle Administration and Managemen', url: 'https://drive.google.com/file/d/1CP_iulMTqoJTUpB9NIk1fse0AAVCEd0y/view?usp=sharing' }
            ]
          },
          {
            title: "2. Dissemination plan",
            //description: "Deliverable description for Deliverable 2",
            links: [
              { name: 'BOOST Dissemination Plan_Final', url: 'https://docs.google.com/document/d/1ZJcrcvX9jKX26-MgoxMdcEPM54VXnSNF/edit?usp=sharing&ouid=100026206590549716007&rtpof=true&sd=true' }
            ]
          },
          {
            title: "3. Syllabus of the course “Student-centred approaches for blended learning”",
            //description: "Deliverable description for Deliverable 3" ,
            links: [
              { name: 'Final_21_07_Student_centred_approaches_for_blended_learning', url: 'https://docs.google.com/document/d/1qdrd3vBkKO13cksjRx_-PyNcT2upsvFO/edit?usp=sharing&ouid=100026206590549716007&rtpof=true&sd=true' },
              { name: 'Review 1 (EU)', url: 'https://drive.google.com/file/d/1PwLL8UW858fKMOkYDNuHP2QIjwHRe_wU/view?usp=sharing' },
              { name: 'Review 2 (UA)', url: 'https://drive.google.com/file/d/1oJ58WmesOi-4Cj4SUOwHNcv5tI1GHrYq/view?usp=sharing' }
            ]
          },
          {
            title: "4. Laboratories for Blended Learning",
            //description: "Deliverable description for Deliverable 4",
            links: [
              {
                name: 'BOOST DonNACEA', url: 'https://sites.google.com/it.donnaba.edu.ua/boostdonnacea/history'
              },
              { name: 'ВІДКРИТТЯ ЛАБОРАТОРІЇ ЗМІШАНОГО НАВЧАННЯ', url: 'https://www.youtube.com/watch?v=Ve26CHEAobE' },
              { name: 'Відкриття Лабораторії змішаного навчання в рамках проєкту «BOOST»', url: 'http://idgu.edu.ua/51770' },
              { name: 'ЗАМОК', url: 'https://kogpa.edu.ua/images/main_dir/library/ZAMOK/%D0%97%D0%B0%D0%BC%D0%BE%D0%BA%207-12%202024.pdf' },
              { name: 'Відкриття лабораторії змішаних навчань', url: 'https://www.youtube.com/watch?v=ZaUc5f-uUHg&t=13s' },
              { name: 'Інтерактивне навчання - цікаве навчання!', url: 'https://drive.google.com/file/d/13qxcSniRg0RpAQ3j7ndyVmwPVogxYIS7/view?usp=sharing' }
            ]
          },
          {
            title: "5. Internationalisation strategy",
            //description: "Deliverable description for Deliverable 5",
            links: [
              { name: 'BKMSPU INTERNATIONALISATION STRATEGY promotion materials', url: 'https://drive.google.com/file/d/1c-KFBx0NHggpisIu3_rnq0vycFzJCGgb/view?usp=sharing' },
              { name: 'Internationalization strategy of MSU until 2030-eng', url: 'https://drive.google.com/file/d/1xAfNL1DsiPuUWohRG_3Jkk1NeJjJED9d/view?usp=sharing' },
              { name: 'P7 Internationalization Strategy (ISUH)', url: 'https://drive.google.com/file/d/1IFExO9OjNdWt51MA8GuPcZ9C-Z_h8nMt/view?usp=sharing' },
              { name: 'Promotional material of the Internationalization Strategy of PNPU', url: 'https://drive.google.com/file/d/1v27-Mk4W0_T8iDPhWgbWVkKQoKRzhF3j/view?usp=sharing' },
              { name: 'Strategy of Internationalisation P8 KREMENETS', url: 'https://drive.google.com/file/d/1_gZFqYD_Be4ewY9D3HNS6y5S6sgaxlXu/view?usp=sharing' }
            ]
          },
          {
            title: "6. Q&A Webinar “University Digitalization Plan”",
            description: "October 30, 2024",
            imageSrc: "https://i.imgur.com/IewKuF2.jpg", 
            links: [
              { name: 'Інформаційний лист вебінару BOOST Ukr', url: 'https://docs.google.com/document/d/1r585NSB17pc61exU6fvomKC_xstTz7-3/edit?usp=sharing&ouid=100026206590549716007&rtpof=true&sd=true' },
              { name: 'Webinar presentation', url: 'https://drive.google.com/file/d/12UtsFTt5baklfihTLMRfvyR49P0XePyg/view?usp=sharing' },
              { name: 'Зміст стратегії диджиталізації переміщеного закладу вищої освіти', url: 'https://docs.google.com/presentation/d/1BGSFB-xGdcaXibC4PT6AXBB1EeGlFfR5/edit?usp=sharing&ouid=100026206590549716007&rtpof=true&sd=true' },
              { name: 'Впровадження робототехніки в освітній процес', url: 'https://docs.google.com/presentation/d/1ujXRmmK4FED1LQaxGw_mb7a22WcrGXu3/edit?usp=sharing&ouid=100026206590549716007&rtpof=true&sd=true' },
              { name: 'BOOST Pathways to Enhancing the Quality of Higher Education 2024.10.30 ', url: 'https://docs.google.com/presentation/d/1XoGdkr329HAIv0f0U1pSyr0r1ueXH_Pi/edit?usp=sharing&ouid=100026206590549716007&rtpof=true&sd=true' },
              { name: 'Сertificates', url: 'https://drive.google.com/drive/folders/1GD56_unyoP0IL0P3SMKx6p1bwNXCtagE' }
            ]
          },
          {
            title: "7. Online conference “Digital Tools for Interactive Learning”",
            description: "November, 18-29, 2024",
            imageSrc: "https://i.imgur.com/sypg0Jy.jpg", 
            links: [
              { name: 'Інформаційний лист онлайн конференції BOOST Ukr', url: 'https://docs.google.com/document/d/1_X6vbx0XE1_jFpHi5CoMiLY6AIzETETr/edit?usp=sharing&ouid=100026206590549716007&rtpof=true&sd=true' }
            ],
            nestedLinks: [
              { name: 'Beata BARCHI | цифрова компетентність освітня', url: 'https://drive.google.com/file/d/1sGZqESYgib-WpTE9acKFuCRIdRYDnu9I/view?usp=sharing' },
              { name: 'O. Golovko | Digital skills in Estonia', url: 'https://drive.google.com/file/d/1jRo6rDIc88Kd_B_CmfNx8CWpdjamaq3b/view?usp=sharing' },
              { name: 'Леся Лисенко | Цифрові інструменти дял пошуку, створення і перевірки навчального компоненту', url: 'https://drive.google.com/file/d/1LT7oCC_zsb87n4bV6O73jUma7G9eb2Yj/view?usp=sharing' },
              { name: 'Мізюк Вікторія | Ефективні прийоми співпраці Ізмаїл', url: 'https://drive.google.com/file/d/1PkDcYbdhQxyl4Oh5fyfjKjJYlOLtRkJ_/view?usp=sharing' },
              { name: 'Катерина Осадча | Штучний інтелект в освіті', url: 'https://docs.google.com/presentation/d/1m9L-FnL3wHt-g9x87s9qaiEul6s4npBH/edit?usp=sharing&ouid=100026206590549716007&rtpof=true&sd=true' },
              { name: 'Magdalena Szyk-Wojtkiewicz | MODERN tools - ICT bank', url: 'https://padlet.com/magdalenaszykwojtkiewicz/modern-tools-ict-bank-2alvrvz6eu52zn7g' },
              { name: 'Magdalena Szyk-Wojtkiewicz | Modern teaching with ICT tools', url: 'https://prezi.com/p/xfnwyszqzwee/modern-teaching-with-ict-tools/?present=1' }
            ]
          },
          {
            title: " 8. International week “University International Cooperation and Grant Activity”",
            //description: "November, 18-29, 2024",
            imageSrc: "https://i.imgur.com/lVuW7Eu.jpg",
            links: [
              { name: 'Інформаційний лист онлайн International Week BOOST Ukr', url: 'https://docs.google.com/document/d/1YaSW6qq44TQlPtfQP-4hdOuuWwfjx6IJ/edit?usp=sharing&ouid=100026206590549716007&rtpof=true&sd=true' }
             
            ],
            nestedLinks: [
              { name: 'Микола Каплієнко | BOOST PROJECT PRESENTATION', url: 'https://drive.google.com/file/d/1Sl0ijuZYispEk5d9saRnyB0hoEYZqFdg/view?usp=sharing' },
              { name: 'Iwona Dwojacka | Erasmus without papers', url: 'https://drive.google.com/file/d/1eSy6_UMc80qQDHvpJb5RZ1q-TbZhC0eK/view?usp=sharing' }
              ]
          }
        ] as Result[]
      };
    },
    components: {
      HeaderApp,
      ResultCard
    }
  });
</script>


