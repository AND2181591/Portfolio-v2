import { Injectable } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: '8E7G95HF0Y6', 
      name: 'GameStoop', 
      image: 'https://i.imgur.com/TFUyLk3.png',
      description: `
        A mock storefront. Modeled after the GameStop website.
      `, 
      descriptionExtended: 'GameStoop is a fully responsive, mock storefront project I modeled after the GameStop website (as it ' + 
        'was in 2021, at least). This idea came about while viewing the various free APIs that were available on ' + 
        'RapidAPI.com and I decided to get a little creative. It will flow through a normal browsing and checkout experience ' + 
        "for the user, but end with a mock checkout form. It won't actually save your information or accept any payment).", 
      accomplishments: [
        'Connected to the RAWR API found on RapidAPI.com to display video game data', 
        'Mild use of Angular Material', 
        'Fully responsive UI layout. Feel free to adjust the screen width!'
      ], 
      techUsed: ['Angular', 'Angular Material', 'TypeScript', 'JavaScript', 'SASS', 'HTML', 'Git', 'Github'], 
      gitHubLink: 'https://github.com/AND2181591/Game-Stoop', 
      deployLink: 'https://game-stoop.vercel.app/'
    }, 
    {
      id: 'E3B4Y91DMO', 
      name: 'Record Tracker', 
      image: 'https://i.imgur.com/TW9Sy8J.png', 
      description: `
        Allows the user to keep track of vinyl records they've 
        ordered or preordered using the Spotify API as a visual aid.
      `, 
      descriptionExtended: 'My passion project! I had this idea after getting into vinyl record collecting and it seemed like ' + 
      'an interesting way to keep track of items that have since been ordered online. The Spotify API is used in this project ' + 
      'as a way to display an album thumbnail for the item ordered. The user can also enter a description of the record ' + 
      'variant they ordered (records are often pressed in different colors). I used this project as an opportunity ' + 
      'to consult my friends in the collecting community what features they would like to see for it.', 
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
      descriptionExtended: 'Rather than tackling the building of a standard calculator, I decided to build a budgeting application ' + 
      'since it seemed more realistic for me in terms of use.', 
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
      descriptionExtended: 'I had fun building this one since I focused solely on styling once the core logic was set up. It ' + 
      "doesn't do too much beyond displaying the season in each hemisphere, but it sure looks pretty!", 
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
      descriptionExtended: 'This was the first Angular application I ever built. I modeled it after the Tasks application ' + 
      'you can find online through the app store. It includes drag and drop functionality in case the user needs to ' + 
      'reorder some of their items. It also includes the ability to color-code their lists so as to keep track of them.', 
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
      descriptionExtended: 'This is definitely one of the more unique ones I have amongst my projects on display. I modeled it ' + 
      'as closely as I could to the original game - albeit, with some added features. For starters, you get more than just ' + 
      'two attempts to complete the game (you get as many as you want until all cards are found). It also keeps score so ' + 
      'you can attempt to beat your previous if you keep playing. All the animations and artwork I built from scratch using ' + 
      'plain CSS.', 
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
        The first application I ever created.
      `, 
      descriptionExtended: "This application has no business being in this portfolio! But it's hilarious and fascinating " + 
      "to see how far I've come. It's a simple menu interface that allows the user to select which item they want to purchase. Then " + 
      "allows the user to complete the order. There's no animation, and it's painfully slow when displaying the menu items, but I " + 
      "insist on showing it off since it's a good reminder of how I'm always improving.", 
      accomplishments: [
        'My first application ever.', 
        'Images were cut using Photoshop and uploaded to google drive.'
      ], 
      techUsed: ['JavaScript', 'CSS', 'HTML', 'Git', 'Github'], 
      gitHubLink: 'https://github.com/AND2181591/MenuSelection', 
      deployLink: 'https://menu-selection.vercel.app/'
    }
  ];

  constructor() { }

  public getAllProjects(): Project[] {
    return [...this.projects];
  }

  public getSingleProject(id: string): Project {
    const project = this.projects.find(p => p.id === id);
    return project!;
  }
}
