function updatePreview() {
    document.getElementById('previewName').textContent = document.getElementById('name').value;
    document.getElementById('previewEmail').textContent = document.getElementById('email').value;
    document.getElementById('previewPhone').textContent = document.getElementById('phone').value;
    document.getElementById('previewExperience1').textContent = document.getElementById('experience1').value;
    document.getElementById('previewExperience2').textContent = document.getElementById('experience2').value;
    document.getElementById('previewExperience3').textContent = document.getElementById('experience3').value;
    document.getElementById('previewProjects').textContent = document.getElementById('projects').value;
    document.getElementById('previewAchievements').textContent = document.getElementById('achievements').value;
    document.getElementById('previewEducation').textContent = document.getElementById('education').value;
    document.getElementById('previewReference').textContent = document.getElementById('reference').value;
}

function generatePDF() {
    const element = document.getElementById('resumePreview');
    html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('resume.pdf');
    });
}

function changeTheme(theme) {
    document.body.className = theme;
}
