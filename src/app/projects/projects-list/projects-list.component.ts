import { Component, OnInit } from '@angular/core';
import { PROJECT_ITEM_ROUTE } from 'src/app/constants/route.constants';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  public projectItemRoute = PROJECT_ITEM_ROUTE;
  public projects: Project[] = [
    {
      id: '8E7G95HF0Y6', 
      name: 'GameStoop', 
      image: 'https://i.imgur.com/TFUyLk3.png',
      description: `
        A mock storefront. Modeled after the GameStop website.
      `, 
      accomplishments: [
        'Connected to the whatoplay API found on RapidAPI.com to display games', 
        'Mild use of Angular Material', 
        'Fully responsive UI layout. Feel free to adjust the screen width!'
      ], 
      techUsed: ['Angular, Angular Material', 'TypeScript', 'JavaScript', 'SASS', 'HTML', 'Git', 'Github'], 
      gitHubLink: 'https://github.com/AND2181591/Game-Stoop', 
      deployLink: 'https://game-stoop.vercel.app/'
    }, 
    {
      id: 'E3B4Y91DMO', 
      name: 'Record Tracker', 
      image: 'https://i.imgur.com/TW9Sy8J.png', 
      description: `
        My passion project! Allows the user to keep track of vinyl records they've 
        ordered or preordered using the Spotify API as a visual aid.
      `, 
      accomplishments: [
        'Connected to the Spotify API', 
        'Full use of Angular Material', 
        'Use of Firebase for front-end authentication and data storage', 
        'Local storage keeps user logged in if they refresh the page'
      ], 
      techUsed: ['Angular', 'Angular Material', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Git', 'Github'], 
      gitHubLink: 'https://github.com/AND2181591/ng-TrackMyRecords', 
      deployLink: 'https://ng-track-my-records.vercel.app/'
    }, 
    {
      id: '7GGGHT3Y7GQ', 
      name: 'Budget Calculator', 
      image: 'https://i.imgur.com/50aPblu.png',
      description: `
        A simple application to calculate income and expenses.
      `, 
      accomplishments: [
        'Drag and drop to rearrange lists',  
        'Angular Material for styling'
      ], 
      techUsed: ['Angular', 'Angular Material', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Git', 'Github'], 
      gitHubLink: 'https://github.com/AND2181591/ng-Tasks', 
      deployLink: 'https://budget-calculator-zeta.vercel.app/'
    }, 
    {
      id: 'Y7DT9WKAS8', 
      name: 'Season Check', 
      image: 'https://i.imgur.com/PHSZZW5.png',
      description: `
        This application checks which season is occurring based on your latitude position in the world.
      `, 
      accomplishments: [
        'Use of Windows Geolocation.', 
        'Animation and some unique color displays based on the season.'
      ], 
      techUsed: ['Angular', 'Angular Material', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Git', 'Github'], 
      gitHubLink: 'https://github.com/AND2181591/Season-Check', 
      deployLink: 'https://season-check-seven.vercel.app/'
    }, 
    {
      id: '0KRG4E0ABJX', 
      name: 'Tasks', 
      image: 'https://i.imgur.com/YKMDWKx.png',
      description: `
        A recreation of the Tasks (to-do list) app.
      `, 
      accomplishments: [
        'First Angular application I ever built!', 
        'Color customization for every task list created', 
        'Use of Firebase for data storage', 
        'Angular Material for styling'
      ], 
      techUsed: ['Angular', 'Angular Material', 'Node.js', 'Firebase', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Git', 'Github'], 
      gitHubLink: 'https://github.com/AND2181591/ng-Tasks', 
      deployLink: 'https://ng-tasks.vercel.app/welcome'
    }, 
    {
      id: 'HZQO9O02FML', 
      name: 'Mario Card Flip Game', 
      image: 'https://i.imgur.com/PE5Zyis.png',
      description: `
        A recreation of the card flip game from Super Mario Bros. 3.
      `, 
      accomplishments: [
        'Created using Vanilla JavaScript', 
        'Pixel artwork on the cards created using CSS, then screen shotted.', 
        'Original CSS work can be viewed here: https://codepen.io/AND2181591/pen/yLBKbEa',  
        'CSS animations used and styled to maintain the original look of the game.'
      ], 
      techUsed: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github'], 
      gitHubLink: 'https://github.com/AND2181591/MarioCardGame', 
      deployLink: 'https://mario-card-game.vercel.app/'
    }, 
    {
      id: 'MACNZZSXUWG', 
      name: 'Menu Selection App', 
      image: 'https://i.imgur.com/X3RdHW4.png',
      description: `
        The first application I ever created. It has no business being in this portfolio! But it's hilarious and it's fascinating to see how far I've come.
      `, 
      accomplishments: [
        'My first application ever.', 
        'Images were cut using Photoshop and uploaded to google drive.'
      ], 
      techUsed: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github'], 
      gitHubLink: 'https://github.com/AND2181591/MenuSelection', 
      deployLink: 'https://menu-selection.vercel.app/'
    }
  ];

  constructor() {}

  public ngOnInit(): void {
    
  }
}
