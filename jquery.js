let dropdown = $('#provinsi');
dropdown.empty();

dropdown.append('<option selected="true" disabled>Provinsi</option>');
dropdown.prop('selectedIndex',0);

const url='http://dev.farizdotid.com/api/daerahindonesia/provinsi';

$.getJSON(url,function(data){
    $.each(data.semuaprovinsi,function(key,entry){
        dropdown.append($('<option></option>').attr('value',entry.id).text(entry.nama));
    })
});
$("#provinsi").on('change', function(e) {

    let dropdown2 = $('#kabupaten');
    dropdown2.empty();
    dropdown2.append('<option selected="true" disabled>Kabupaten</option>');
    dropdown2.prop('selectedIndex',0);

    const url2 = `http://dev.farizdotid.com/api/daerahindonesia/provinsi/${$(this).val()}/kabupaten`
    
    $.getJSON(url2,function(data){
        $.each(data.kabupatens,function(key,entry){
            dropdown2.append($('<option></option>').attr('value',entry.id).text(entry.nama));
        })
    });

})
$('#kabupaten').on('change',function(e){
    
    let dropdown3 = $('#kecamatan');
    dropdown3.empty();
    dropdown3.append('<option selected="true" disabled>Kecamatan</option>');
    dropdown3.prop('selectedIndex',0);

    const url3 = `http://dev.farizdotid.com/api/daerahindonesia/provinsi/kabupaten/${$(this).val()}/kecamatan`
    
    $.getJSON(url3,function(data){
        $.each(data.kecamatans,function(key,entry){
            dropdown3.append($('<option></option>').attr('value',entry.id).text(entry.nama));
        })
    });


})
