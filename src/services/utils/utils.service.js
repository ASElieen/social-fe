import { avatarColors } from './static.data'
import { floor, random } from 'lodash'

export class Utils {
    // 随机选择颜色
    static avatarColor() {
        return avatarColors[floor(random(0.9) * avatarColors.length)]
    }
}