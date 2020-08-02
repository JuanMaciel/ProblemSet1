import React from 'react';
import faker from 'faker';
import Image from './Image';
import Description from './Description';
import Number from './NumberOfFriends';



function Card(){
    const firstName = faker.name.firstName();
    const city = faker.address.city();

 return(   
<div class="ui card">
  <div class="image">
    <Image source={faker.image.avatar()}></Image>
  </div>
  <div class="content">
    <a class="header">{firstName}</a>
    <div class="meta">
      <span class="date">Joined in 2013</span>
    </div>
    <div class="description">
      {firstName} is a <Description job={faker.name.jobTitle()}></Description> living in {city}.
    </div>
  </div>
  <div class="extra content">
    <a>
      <i class="user icon"></i>
      <Number number={faker.random.number()}></Number>
    </a>
  </div>
</div>
 )
}

export default Card;