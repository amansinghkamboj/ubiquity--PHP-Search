/* This is a template command. */
CmdUtils.CreateCommand({
  names: ["go"],
  description: "php",
  help: "php framework functions.",
  author: {
    name: "Aman singh kamboj",
    email: "spamxy-z@yahoo.co.in",
    homepage: "http://in.linkedin.com/in/amansinghkamboj/",
  },
  license: "GPL",
  homepage: "http://in.php.net/",
  icon: "http://in.php.net/favicon.ico",
  arguments: [{role: "object", nountype: noun_arb_text, label: "text"}],
  preview: function preview(pblock, args) {
    pblock.innerHTML = "<br />Looking for " + args.object.html.bold() + "."; 
	pblock.innerHTML += "<br /><br /><b>eg.</b>&nbsp;go phpf strstr";
    pblock.innerHTML += "<br /><br /><b>PHP</b>&nbsp;<img src='http://in.php.net/favicon.ico'>";
    pblock.innerHTML += "<br />&nbsp;&nbsp;Php searchText , command : <b>"+this.name+" php searchText</b>";  
    pblock.innerHTML += "<br />&nbsp;&nbsp;Php func , command : <b>"+this.name+" phpf funcName</b>";   
    pblock.innerHTML += "<br/><br/><b>Wordpress</b>&nbsp;<img src='http://s.wordpress.org/favicon.ico'>";
	pblock.innerHTML += "<br />&nbsp;&nbsp;Wordpress searchText , command : <b>"+this.name+" wp searchText</b>";  
    pblock.innerHTML += "<br />&nbsp;&nbsp;Wordpress func , command : <b>"+this.name+" wpf funcName</b>";
	pblock.innerHTML += "<br/><br/><b>Drupal</b>&nbsp;";
	pblock.innerHTML += "<br />&nbsp;&nbsp;Drupal searchText , command : <b>"+this.name+" dp searchText</b>";  
    pblock.innerHTML += "<br />&nbsp;&nbsp;Drupal func , command : <b>"+this.name+" dpf funcName</b>";
	pblock.innerHTML += "<br/><br/><b>Codeignitor</b>&nbsp;<img src='http://codeigniter.com/images/design/favicon.ico'>";
	pblock.innerHTML += "<br />&nbsp;&nbsp;Codeignitor searchText , command : <b>"+this.name+" ci searchText</b>";  
	pblock.innerHTML += "<br/><br/><b>Yii</b>&nbsp;<img src='http://www.yiiframework.com/favicon.ico'>";
	pblock.innerHTML += "<br />&nbsp;&nbsp;Yii searchText , command : <b>"+this.name+" yii searchText</b>";
	pblock.innerHTML += "<br/><br/><b>Cake</b>&nbsp;";
	pblock.innerHTML += "<br />&nbsp;&nbsp;Cake searchText , command : <b>"+this.name+" cake searchText</b>";
	pblock.innerHTML += "<br/><br/><b>Magento</b>&nbsp;";
	pblock.innerHTML += "<br />&nbsp;&nbsp;Magento searchText , command : <b>"+this.name+" mg searchText</b>";
	pblock.innerHTML += "<br/><br/><b>W3C</b>&nbsp;<img src='http://www.w3schools.com/favicon.ico'>";
	pblock.innerHTML += "<br />&nbsp;&nbsp;W3C searchText , command : <b>"+this.name+" w3c searchText</b>";	
	pblock.innerHTML += "<br/><br/><b>MySQL</b>&nbsp;<img src='http://dev.mysql.com/common/themes/sakila/favicon.ico'>";
	pblock.innerHTML += "<br />&nbsp;&nbsp;MySQL searchText , command : <b>"+this.name+" mysql searchText</b>";	
    pblock.innerHTML += "<br/><br/><br/><b>by: Aman Singh Kamboj</b><br/>http://in.linkedin.com/in/amansinghkamboj/<br />http://twitter.com/amansinghkamboj";   
  },
  execute: function execute(args) {
    displayMessage("Searching: " + args.object.text, this);
    var inputarr = new Array();
    var srchstr = args.object.text;
    inputarr = srchstr.split(' '); 
    var srchkey = inputarr[0];
    inputarr.splice(0,1);
    var url = '';
    var newsrchstr = inputarr.join(' ');
    switch(srchkey)
    {
    case 'php':
      url = "http://in.php.net/results.php?q="+ newsrchstr +"&l=en&p=all";      
      break;
    case 'phpf':
      url = "http://in.php.net/manual/en/function."+ newsrchstr +".php";
      break;
    case 'wp':
      url = "http://wordpress.org/search/"+newsrchstr;
      break;
    case 'wpf':
      url ="http://codex.wordpress.org/Function_Reference/"+newsrchstr;
      break;
	case 'dp':
      url ="http://drupal.org/search/apachesolr_multisitesearch/"+newsrchstr;
      break;
	case 'dpf':
      url ="http://api.drupal.org/api/drupal/includes--actions.inc/function/"+newsrchstr+"/";
      break;
	case 'ci':
      url = "http://www.google.com/#q="+ newsrchstr+" site:codeigniter.com/user_guide/";
      break;
	case 'yii':
      url = "http://www.google.com/#q="+ newsrchstr+" site:yiiframework.com";
      break;
	case 'cake':
      url = "http://www.google.com/#q="+ newsrchstr+" site:cakephp.org";
      break;  
	case 'mg':
      url = "http://www.google.com/#q="+ newsrchstr+" site:magentocommerce.com";
      break;
    case 'w3c':
      url = "http://www.google.com/#q=w3c "+ newsrchstr;
      break;
	case 'mysql':
      url = "http://www.google.com/#q="+ newsrchstr+" site:dev.mysql.com";
      break;
	default:
      url = "http://www.google.com/#q="+ newsrchstr;
      break;
    }
    Utils.openUrlInBrowser(url);
  },
});