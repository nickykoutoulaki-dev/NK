music.onEvent(MusicEvent.MelodyNotePlayed, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
})
basic.forever(function () {
    if (input.soundLevel() > 90) {
        basic.showString("be quiet")
        basic.showIcon(IconNames.Sad)
    } else {
        music.play(music.stringPlayable("E B C5 A B G A F ", 121), music.PlaybackMode.LoopingInBackground)
        basic.showString("well done")
        basic.showIcon(IconNames.Happy)
        basic.showIcon(IconNames.Heart)
    }
})
