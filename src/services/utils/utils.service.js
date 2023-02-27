import { avatarColors } from './static.data'
import { floor, random } from 'lodash'

export class Utils {
    // 随机选择颜色
    static avatarColor() {
        return avatarColors[floor(random(0.9) * avatarColors.length)]
    }

    // canvas生成默认头像
    static generateAvatarImage(text, backgroundColor, textColor = 'white') {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')

        canvas.width = 200
        canvas.height = 200

        context.fillStyle = backgroundColor
        context.fillRect(0, 0, canvas.width, canvas.height)

        // canvas上画出文本
        context.font = 'normal 80px sans-serif'
        context.fillStyle = textColor
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.fillText(text, canvas.width / 2, canvas.height / 2)

        return canvas.toDataURL('image/png')
    }
}