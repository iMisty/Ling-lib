//自動切換焦點
(function(){
	function tabForward(event){
		event = EventUtil.getEvent(event);
		var target = EventUtil.getTarget(event);

		if(target.value.length == target.maxLength){
			var form = target.form;

			for(var i = 0,len = form.elements.length;i < len;i++){
				if(form.elements[i] == target){
					if(form.elements[i + 1]){
						form.elements[i+1].focus();
					}
					return;
				}
			}
		}
	}

	
})();