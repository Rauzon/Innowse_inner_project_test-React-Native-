import {BehaviorSubject} from 'rxjs';
import {INewsState} from './news.types';

class NewsService {
  public newsState$ = new BehaviorSubject({
    news: [
      {
        id: '1',
        icon: 'first_new',
        title: 'Innowise признана одним из лучших разработчиков ПО в Беларуси',
        date: '24.04.2021',
        headers: [],
        preContent: '',
        content: [],
      },
      {
        id: '2',
        icon: 'second_new',
        title: 'Дилемма QA: ручное или автоматическое тестирование',
        date: '24.04.2021',
        headers: [
          'What is the Difference between Automation and Manual Testing?',
          'Automated Testing When do I go for automated testing?',
          'Manual Testing When is manual testing a better choice?',
          'Summary',
        ],
        preContent: '',
        content: [
          {
            subtitle:
              'What is the Difference between Automation and Manual Testing?',
            text: 'During manual testing (MT) a QA engineer or a tester carries out each and every test case by hand, no scripts are used. While in automated testing (AT) everything is on the contrary and a tester uses scripts, tools and software run all the test cases. So as now we understand both the concepts, let’s delve into details.',
          },
          {
            subtitle: 'Automated Testing When do I go for automated testing?',
            text: 'During manual testing (MT) a QA engineer or a tester carries out each and every test case by hand, no scripts are used. While in automated testing (AT) everything is on the contrary and a tester uses scripts, tools and software run all the test cases. So as now we understand both the concepts, let’s delve into details.',
          },
          {
            subtitle: 'Manual Testing When is manual testing a better choice?',
            text: 'During manual testing (MT) a QA engineer or a tester carries out each and every test case by hand, no scripts are used. While in automated testing (AT) everything is on the contrary and a tester uses scripts, tools and software run all the test cases. So as now we understand both the concepts, let’s delve into details.',
          },
          {
            subtitle: 'Summary',
            text: 'During manual testing (MT) a QA engineer or a tester carries out each and every test case by hand, no scripts are used. While in automated testing (AT) everything is on the contrary and a tester uses scripts, tools and software run all the test cases. So as now we understand both the concepts, let’s delve into details.',
          },
        ],
      },
      {
        id: '3',
        icon: 'third_new',
        title: 'Как сделать SRS документ?',
        date: '24.04.2021',
        headers: [],
        preContent: '',
        content: [],
      },
      {
        id: '4',
        icon: 'fourth_new',
        title: 'Сколько стоит создать приложение, подобное Tinder?',
        date: '24.04.2021',
        headers: [],
        preContent: '',
        content: [],
      },
      {
        id: '5',
        icon: 'sixth_new',
        title: 'Плюсы и минусы ИТ-аутсорсинга и офшоринга',
        date: '24.04.2021',
        headers: [],
        preContent: '',
        content: [],
      },
      {
        id: '6',
        icon: 'fifth_new',
        title:
          'Планируйте разработку собственного веб-сайта электронной коммерции шаг за шагом',
        date: '24.04.2021',
        headers: [],
        preContent: '',
        content: [],
      },
    ],
  } as INewsState);
  constructor() {
    if (NewsService.exists) {
      return NewsService.instance;
    }
    NewsService.instance = this;
    NewsService.exists = true;
  }
  public getNews = () => {
    return this.newsState$.value.news;
  };
}

const newsService = new NewsService();

export default newsService;
