// This Script draws and adds functionality to writing sidebar
// Should be easy to add new pieces without thinking about it
// Each entry has: title, date, rating & author (for books)
// Reqs for writing sidebar
// sidebar lays out all writing into three sections Tech, Climbing, Book Reviews
// for each section:
// can search pieces by title
// can search tags
// can sort by alphabet, date and for books book rating & author

(function(){
    const sidebarElem = document.getElementById('sidebar');
    function addSection(section) {
        const sectionHeader = document.createElement('div');
        sectionHeader.classList.add('section-header');
        const sectionTitle = document.createElement('p');
        sectionTitle.innerText = section.name;
        sectionHeader.appendChild(sectionTitle);
        sidebarElem.appendChild(sectionHeader);
        addPieces(section, sectionHeader);
        toggleShowPieces({currentTarget:sectionHeader});
        sectionHeader.addEventListener('click', toggleShowPieces);
    }
    function toggleShowPieces(e) {
        const elem = e.currentTarget;
        let display = 'block';
        if (elem.getAttribute('data-show') === 'true') {
            display = 'none';
            elem.setAttribute('data-show', 'false');
        } else {
            elem.setAttribute('data-show', 'true');
        }
        for (var i = 0; i < elem.children.length; i++) {
            if (elem.children[i].nodeName === 'A') {
                elem.children[i].style.display = display;
            }
        }
    }
    function addPieces(section, elem) {
        section.entries.forEach(function(e) {
            const entry = document.createElement('a');
            entry.href = '/writing/pieces/' + e.name.toLowerCase().split(' ').join('-') + '.html';
            const entryText = document.createElement('p');
            entryText.classList.add('entry-link')
            entryText.innerText = e.name + (e.author ? ' - ' + e.author : '');
            entry.appendChild(entryText);
            elem.appendChild(entry);
        });
    }
    const sections =  [
            {name: 'Random', entries:[]},
            {name:'Tech', entries:[
                {name:'Launching NPM package 1', date: 'March 18, 2023'}
            ]},
            {name:'Climbing', entries:[]},
            {
                name: 'Book Reviews',
                entries: [
                    {name: 'The Paper Menagerie', author: 'Ken Liu', date: 'March 13, 2023', rating: '76'},
                    {name: 'Pale Fire', author: 'Nabokov', date: 'March 14, 2023', rating: '81'},
                    {name: 'Shards of Honor', author: 'Lois McMaster Bujold', date: 'March 15 2023', rating: '83'}
                ]
            },
        ]
    
    // loop over pieces and add section headers for each section;
    for (var i = 0; i < sections.length; i++){
        addSection(sections[i]);
    }
    window.sections = sections;
})()