# Heisig kanji and keywords quizzer

This humble webapp is a barebones but opinionated quizzing engine for James Heisig's Japanese kanji learning method described in his *Remembering the kanji* (6th edition). 

A live version is available at [http://aldebrn.me/randh/](http://aldebrn.me/randh/).

# Usage

You specify a beginning and ending number and click either "kanji" or "keyword" for the app to give you a randomly-selected kanji or keyword. After a default of 8 seconds (settable), the answer will be revealed. To short-circuit the timer and see the answer immediately, you may click "now".

# Warning and information about kanji stroke order webfont

The very first time you see a kanji, there may be a very long delay. **Sorry.**

This is because your browser is downloading a 17 MB kanji stroke order webfont. This webfont was converted from [Timothy Eyre's Kanji stroke order font v3.001](http://www.nihilist.org.uk/), which in turn is credited to "Ulrich Apel, the AAAA project and the Wadoku project". The conversion from a TTF font to a webfont was done using [Anantha Kumaran's webify](https://github.com/ananthakumaran/webify/), which is Haskell magic. Both the original font as well as webify are BSD/MIT-licensed.

This is my favorite way of visualizing stroke order. Each stroke is numbered, and the location of the number relative to the stroke indicates its starting point, allowing me to instantly verify either the complete stroke order or just one specific part of it. Of course, in very crammed kanji, it will be hard for a total novice to see which stroke a number is referring to and where it begins, but this is readily remedied by increasing your browser's font size. Especially if you have some inkling of the component primitives making up the complex kanji, this way of visualizing stroke orders is very fast and effective.

# Legal

James Heisig and the University of Hawaiʻi Press, the author and publisher, respectively, of *Remembering the Kanji*, have copyrights on the English keywords. These are included here without permission in `data.js`. Any use of this tool requires licensing from James Heisig or his publisher.

The webfont portions of this repository are purely derivative works of BSD-licensed content (the original diagrams and fonts) and are thus owned by their respective copyright holders. See `LICENSE.webfont` for details.

The software portions of this tool are released by Ahmed Fasih under the BSD license. See `LICENSE`.
