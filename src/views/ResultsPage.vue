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
                    :imageSrc="result.imageSrc" />
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
            imageSrc: "https://scontent-iev1-1.xx.fbcdn.net/v/t39.30808-6/462630789_122170223888112649_6957650862517327971_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mxg4wxsaivIQ7kNvgG2Rpzz&_nc_zt=23&_nc_ht=scontent-iev1-1.xx&_nc_gid=Aa49e1BC6bou7twCu6fYSYb&oh=00_AYATGpI0Ldu43M3X2VE0INMvyYdw1fV_bXl3bDElc8YWDw&oe=67329BA1", 
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
            imageSrc: "https://scontent.xx.fbcdn.net/v/t1.15752-9/462563161_1346008306370910_7684287979469554487_n.jpg?stp=dst-jpg_s480x480&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=1YQEbmWmX7UQ7kNvgE1KlWm&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QEjiqq8OsOjEYbucSO0pjUV6Fi0j--XIEfM1lxAbv2Edw&oe=67599067", 
            links: [
              { name: 'Інформаційний лист онлайн конференції BOOST Ukr', url: 'https://docs.google.com/document/d/1_X6vbx0XE1_jFpHi5CoMiLY6AIzETETr/edit?usp=sharing&ouid=100026206590549716007&rtpof=true&sd=true' },
              { name: '', url: '' }
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


