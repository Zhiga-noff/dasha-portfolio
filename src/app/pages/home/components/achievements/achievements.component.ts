import { Component } from '@angular/core';
import { achievementsConstant } from '../../../../../libs/constant/achievements.constant';
import { IAchievements } from '../../../../../libs/types/achievements.types';

@Component({
  selector: 'z-achievements',
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss',
})
export class AchievementsComponent {
  readonly achievements: IAchievements[] = achievementsConstant;
}
