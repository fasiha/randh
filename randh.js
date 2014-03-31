$( document ).ready(function() {
	kw = kw.split(',');

	function getrand(items) {
		var idx = Math.floor(Math.random() * items.length);
        return {item: items[idx], index: idx};
    }

    var showAnswer = function(obj) {
    	var answer = $('#answer');
    	answer.css("visibility", "visible");
    }
    $('#showAnswer').click(showAnswer);

    var getStartEnd = function() {
    	var startIdx = $("#startIdx");
    	var endIdx = $("#endIdx");
    	var start = Number(startIdx.val());
    	var end = Number(endIdx.val());
    	if (start<1) {start = 1; startIdx.val(start);}
    	if (end<1) {end = 1; endIdx.val(end);}
    	if (start>=end){start = end; startIdx.val(start);}
    	return [start, end];
    };

    var updateQuestion = function(obj) {
    	var question = $('#question');
    	var answer = $('#answer');

    	if (0 == obj.currentTarget.id.localeCompare("kanjiSelect")) {
    		var questionList = kanji;
    		var answerList = kw;

    		question[0].className = "kanjiStrokeOrder";
    		answer[0].className = "";
    	} else { 
    		var questionList = kw;
    		var answerList = kanji;

    		answer[0].className = "kanjiStrokeOrder";
    		question[0].className = "";
		}

    	var startEnd = getStartEnd();
    	var start = startEnd[0];
    	var end = startEnd[1];

    	var randQuestion = getrand(questionList.slice(start-1, end));
    	var randAns = answerList[start-1+randQuestion.index];

    	question.html('');
    	question.html(randQuestion.item);

    	answer.css("visibility", "hidden");
    	answer.html('');
    	answer.html(randAns);

    	var seconds = Number($('#timerSeconds').val());
    	window.setTimeout(showAnswer, seconds * 1000);
    };
    $('#kanjiSelect').click(updateQuestion);
    $('#keywordSelect').click(updateQuestion);

});