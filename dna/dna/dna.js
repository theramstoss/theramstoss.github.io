document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        const sequenceFile = document.getElementById('sequence').files[0];
        const databaseFile = document.getElementById('database').files[0];
        var sequenceReader = new FileReader();
        

        function loadSequence() {
            return new Promise(resolve => {
                sequenceReader.addEventListener('load', resolve, {once:true});
            })
        }

        // function loadDatabase() {
        //     return new Promise(resolve => {

        //     })
        // }

        loadSequence().then(e => console.log(e));

        // reader.onload = function(e) {
        //     let sequence = e.target.result;
        //     document.querySelector('#p1').innerHTML = sequence;
        // }
        sequenceReader.readAsText(sequenceFile);
        return false;
    }
})