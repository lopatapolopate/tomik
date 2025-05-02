function odeslatFormular(event) {
    event.preventDefault();
    const jmeno = document.getElementById('jmeno').value;
    const zprava = document.getElementById('zprava').value;
    alert(`Děkujeme za zprávu, ${jmeno}!\nVaše zpráva: ${zprava}`);
}
