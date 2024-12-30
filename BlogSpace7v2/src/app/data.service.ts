import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private blogPosts: any = [
    {
      author: 'Nova Bennett - October 12, 2024',
      image: 'assets/Space1.jpg',
      btitle: 'Four things you (probably) didn’t know about space',
      desc: 'Whether it’s in our own backyard or millions of light-years away, the universe can get pretty weird.',
    },
    {
      author: 'Orion Black - December 5, 2024',
      image: 'assets/Space2.jpg',
      btitle: 'Take a peek inside the Black Holes Space & Beyond Box universe',
      desc: 'From Fermi Bubbles to pulsar planets, these are some of the strangest and most fascinating.',
    },
    {
      author: 'Celeste Harper - August 15, 2024',
      image: 'assets/Space3.jpg',
      btitle: 'Why Earth is not flat | The Flat Earth Conspiracy',
      desc: '4.5 billion years into the future, the Milky Way will collide with Andromeda.',
    },
    {
      author: 'Cassian Frost - November 30, 2024',
      image: 'assets/Space4.jpg',
      btitle: 'The most epic waves in the universe',
      desc: 'The formation and detection of gravitational waves and how they affect time',
    },
    {
      author: 'Vega Brooks - February 18, 2023',
      image: 'assets/Space5.jpg',
      btitle: 'Jupiter Planet profile: A quick dive into the gas giant',
      desc: 'Not only does the gas giant reign supreme in our solar system, Jupiter also harbors many fascinating features.',
    },
    {
      author: 'Polaris Wolfe - June 1, 2023',
      image: 'assets/Space6.jpg',
      btitle: 'The Andromeda Milky Way Collision',
      desc: '4.5 billion years into the future, the Milky Way will ollide with Andromeda.',
    },
  ];

  getData(){
    return this.blogPosts;
  }
}
