$('.btntype button:eq(0)').click(function(){
	$(this).addClass('choose').siblings().removeClass('choose');
	$('.group ul:eq(0)').removeClass('hidden').siblings().addClass('hidden');
})
$('.btntype button:eq(1)').click(function(){
	$(this).addClass('choose').siblings().removeClass('choose');
	$('.group ul:eq(1)').removeClass('hidden').siblings().addClass('hidden');
})