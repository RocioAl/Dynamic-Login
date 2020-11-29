
jQuery(document).on('submit', '#formlg', function (event) {
	event.preventDefault();

	jQuery.ajax({
		url: 'main_app/login.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize(),
		beforeSend: function () {
			$('.botonlg').val('Validando..');
		}
	})
		.done(function (respuesta) {
			console.log(respuesta);
			if (!respuesta.error) {
				if (respuesta.tipo == 'adrian_parodi') {
					location.href = 'main_app/adrian_parodi/';

				} 
				if (respuesta.tipo == 'alberto_cardenas') {
					location.href = 'main_app/alberto_cardenas/';

				}if (respuesta.tipo == 'alberto_sulllca_huaman') {
					location.href = 'main_app/alberto_sulllca_huaman/';

				}if (respuesta.tipo == 'alejandro_huaman') {
					location.href = 'main_app/alejandro_huaman/';

				}if (respuesta.tipo == 'alejandro_raprey') {
					location.href = 'main_app/alejandro_raprey/';

				}if (respuesta.tipo == 'alejandro_santos') {
					location.href = 'main_app/alejandro_santos/';

				}if (respuesta.tipo == 'alex_castro') {
					location.href = 'main_app/alex_castro/';
					
				}if (respuesta.tipo == 'benito_sanjinez') {
					location.href = 'main_app/benito_sanjinez/';

				}if (respuesta.tipo == 'carlos_aguilar') {
					location.href = 'main_app/carlos_aguilar/';

				}if (respuesta.tipo == 'lizardo_cerna') {
					location.href = 'main_app/lizardo_cerna/';

				}if (respuesta.tipo == 'ciriaco_gamboa') {
					location.href = 'main_app/ciriaco_gamboa/';

				}if (respuesta.tipo == 'clodoveo_bonilla') {
					location.href = 'main_app/clodoveo_bonilla/';

				}if (respuesta.tipo == 'miguel_ramirez') {
					location.href = 'main_app/miguel_ramirez/';

				}if (respuesta.tipo == 'dario_alonzo') {
					location.href = 'main_app/dario_alonzo/';

				}if (respuesta.tipo == 'darwin_ortiz') {
					location.href = 'main_app/darwin_ortiz/';

				}if (respuesta.tipo == 'david_capa') {
					location.href = 'main_app/david_capa/';

				}if (respuesta.tipo == 'david_reyes') {
					location.href = 'main_app/david_reyes/';

				}if (respuesta.tipo == 'dedicacion_abarca') {
					location.href = 'main_app/dedicacion_abarca/';

				}if (respuesta.tipo == 'denis_guillen') {
					location.href = 'main_app/denis_guillen/';

				}if (respuesta.tipo == 'diego_tantarico') {
					location.href = 'main_app/diego_tantarico/';

				}if (respuesta.tipo == 'edgar_ignacio') {
					location.href = 'main_app/edgar_ignacio/';

				}if (respuesta.tipo == 'edgar_luis_ignacio') {
					location.href = 'main_app/edgar_luis_ignacio/';

				}if (respuesta.tipo == 'edgar_zevallos') {
					location.href = 'main_app/edgar_zevallos/';

				}if (respuesta.tipo == 'edwin_valladares') {
					location.href = 'main_app/edwin_valladares/';

				}if (respuesta.tipo == 'egberto_abanto') {
					location.href = 'main_app/egberto_abanto/';

				}if (respuesta.tipo == 'ernesto_linares') {
					location.href = 'main_app/ernesto_linares/';

				}if (respuesta.tipo == 'ernesto_zapata') {
					location.href = 'main_app/ernesto_zapata/';

				}if (respuesta.tipo == 'exequiel_soto') {
					location.href = 'main_app/exequiel_soto/';

				}if (respuesta.tipo == 'ezequiel_medina') {
					location.href = 'main_app/ezequiel_medina/';

				}if (respuesta.tipo == 'fabian_pariona') {
					location.href = 'main_app/fabian_pariona/';

				}if (respuesta.tipo == 'falcon_jesus') {
					location.href = 'main_app/falcon_jesus/';

				}if (respuesta.tipo == 'felix_garay') {
					location.href = 'main_app/felix_garay/';

				}if (respuesta.tipo == 'fidel_pari') {
					location.href = 'main_app/fidel_pari/';

				}if (respuesta.tipo == 'juan_wu') {
					location.href = 'main_app/juan_wu/';

				}if (respuesta.tipo == 'francisco_castaneda') {
					location.href = 'main_app/francisco_castaneda/';
					
				}if (respuesta.tipo == 'francisco_villas') {
					location.href = 'main_app/francisco_villas/';

				}if (respuesta.tipo == 'frank_flores') {
					location.href = 'main_app/frank_flores/';

				}if (respuesta.tipo == 'franklin_vilca') {
					location.href = 'main_app/franklin_vilca/';

				}if (respuesta.tipo == 'gabriel_villa') {
					location.href = 'main_app/gabriel_villa/';

				}if (respuesta.tipo == 'genry_zevallos') {
					location.href = 'main_app/genry_zevallos/';

				}if (respuesta.tipo == 'gimy_ramos') {
					location.href = 'main_app/gimy_ramos/';
					
				}if (respuesta.tipo == 'gregorio_manayay') {
					location.href = 'main_app/gregorio_manayay/';

				}if (respuesta.tipo == 'jaime_camones') {
					location.href = 'main_app/jaime_camones/';

				}if (respuesta.tipo == 'jaime_cardenas') {
					location.href = 'main_app/jaime_cardenas/';

				}if (respuesta.tipo == 'javier_pizarro') {
					location.href = 'main_app/javier_pizarro/';

				}if (respuesta.tipo == 'jesus_bardales') {
					location.href = 'main_app/jesus_bardales/';

				}if (respuesta.tipo == 'jesus_falcon') {
					location.href = 'main_app/jesus_falcon/';

				}if (respuesta.tipo == 'jesus_mozo') {
					location.href = 'main_app/jesus_mozo/';

				}if (respuesta.tipo == 'jhon_peralta') {
					location.href = 'main_app/jhon_peralta/';

				}if (respuesta.tipo == 'joel_tantarico') {
					location.href = 'main_app/joel_tantarico/';

				}if (respuesta.tipo == 'john_bulnes') {
					location.href = 'main_app/john_bulnes/';

				}if (respuesta.tipo == 'john_sarmiento') {
					location.href = 'main_app/john_sarmiento/';

				}if (respuesta.tipo == 'jorge_ojeda') {
					location.href = 'main_app/jorge_ojeda/';

				}if (respuesta.tipo == 'jose_blas') {
					location.href = 'main_app/jose_blas/';

				}if (respuesta.tipo == 'jose_diaz') {
					location.href = 'main_app/jose_diaz/';

				}if (respuesta.tipo == 'tito_herrera') {
					location.href = 'main_app/tito_herrera/';

				}if (respuesta.tipo == 'jose_sanjinez') {
					location.href = 'main_app/jose_sanjinez/';
				}if (respuesta.tipo == 'juan_carlos_condor') {
					location.href = 'main_app/juan_carlos_condor/';

				}if (respuesta.tipo == 'juan_carlos_duran') {
					location.href = 'main_app/juan_carlos_duran/';

				}if (respuesta.tipo == 'juan_carlos_mestanza') {
					location.href = 'main_app/juan_carlos_mestanza/';

				}if (respuesta.tipo == 'juan_carlos_paredes') {
					location.href = 'main_app/juan_carlos_paredes/';

				}if (respuesta.tipo == 'juan_inga') {
					location.href = 'main_app/juan_inga/';

				}if (respuesta.tipo == 'juan_ore') {
					location.href = 'main_app/juan_ore/';

				}if (respuesta.tipo == 'julio_ortiz') {
					location.href = 'main_app/julio_ortiz/';

				}if (respuesta.tipo == 'juan_ramirez_n') {
					location.href = 'main_app/juan_ramirez_n/';

				}if (respuesta.tipo == 'julio_sanchez') {
					location.href = 'main_app/julio_sanchez/';

				}if (respuesta.tipo == 'kardahi_marcelo') {
					location.href = 'main_app/kardahi_marcelo/';

				}if (respuesta.tipo == 'larry_anchante') {
					location.href = 'main_app/larry_anchante/';

				}if (respuesta.tipo == 'leonardo_rafael') {
					location.href = 'main_app/leonardo_rafael/';

				}if (respuesta.tipo == 'luis_castillo') {
					location.href = 'main_app/luis_castillo/';

				}if (respuesta.tipo == 'luis_espinoza') {
					location.href = 'main_app/luis_espinoza/';

				}if (respuesta.tipo == 'luis_jauregui') {
					location.href = 'main_app/luis_jauregui/';

				}if (respuesta.tipo == 'luis_ramirez') {
					location.href = 'main_app/luis_ramirez/';

				}if (respuesta.tipo == 'luis_romero') {
					location.href = 'main_app/luis_romero/';

				}if (respuesta.tipo == 'marcelino_villafana') {
					location.href = 'main_app/marcelino_villafana/';

				}if (respuesta.tipo == 'marco_cardenas') {
					location.href = 'main_app/marco_cardenas/';

				}if (respuesta.tipo == 'marco_montes') {
					location.href = 'main_app/marco_montes/';

				}if (respuesta.tipo == 'mario_gechona') {
					location.href = 'main_app/mario_gechona/';

				}if (respuesta.tipo == 'mario_loli') {
					location.href = 'main_app/mario_loli/';

				}if (respuesta.tipo == 'mario_marcelo') {
					location.href = 'main_app/mario_marcelo/';

				}if (respuesta.tipo == 'martin_mendieta') {
					location.href = 'main_app/martin_mendieta/';

				}if (respuesta.tipo == 'miguel_gonzales') {
					location.href = 'main_app/miguel_gonzales/';

				}if (respuesta.tipo == 'miguel_mayta') {
					location.href = 'main_app/miguel_mayta/';

				}if (respuesta.tipo == 'paulo_ruiz') {
					location.href = 'main_app/paulo_ruiz/';

				}if (respuesta.tipo == 'nemesio_santisteban') {
					location.href = 'main_app/nemesio_santisteban/';

				}if (respuesta.tipo == 'nilsber_espinoza') {
					location.href = 'main_app/nilsber_espinoza/';
				}if (respuesta.tipo == 'nilton_narciso') {
					location.href = 'main_app/nilton_narciso/';

				}if (respuesta.tipo == 'orlando_penafiel') {
					location.href = 'main_app/orlando_penafiel/';

				}if (respuesta.tipo == 'pablo_laura') {
					location.href = 'main_app/pablo_laura/';

				}if (respuesta.tipo == 'ronald_celedonio') {
					location.href = 'main_app/ronald_celedonio/';

				}if (respuesta.tipo == 'paul_pio') {
					location.href = 'main_app/paul_pio/';

				}if (respuesta.tipo == 'pedro_torres') {
					location.href = 'main_app/pedro_torres/';

				}if (respuesta.tipo == 'percy_lozano') {
					location.href = 'main_app/percy_lozano/';

				}if (respuesta.tipo == 'percy_ramirez') {
					location.href = 'main_app/percy_ramirez/';
					
				}if (respuesta.tipo == 'raul_socualaya') {
					location.href = 'main_app/raul_socualaya/';

				}if (respuesta.tipo == 'rene_layme') {
					location.href = 'main_app/rene_layme/';

				}if (respuesta.tipo == 'rogelio_choquehuanca') {
					location.href = 'main_app/rogelio_choquehuanca/';

				}if (respuesta.tipo == 'rommel_castro') {
					location.href = 'main_app/rommel_castro/';

				}if (respuesta.tipo == 'ruben_bazan') {
					location.href = 'main_app/ruben_bazan/';

				}if (respuesta.tipo == 'ruben_de_la_cruz') {
					location.href = 'main_app/ruben_de_la_cruz/';

				}if (respuesta.tipo == 'orlando_cubas') {
					location.href = 'main_app/orlando_cubas/';

				}if (respuesta.tipo == 'sandro_cortez') {
					location.href = 'main_app/sandro_cortez/';

				}if (respuesta.tipo == 'victor_bravo') {
					location.href = 'main_app/victor_bravo/';

				}if (respuesta.tipo == 'jenrry_urcia') {
					location.href = 'main_app/jenrry_urcia/';

				}if (respuesta.tipo == 'victor_poma') {
					location.href = 'main_app/victor_poma/';

				}if (respuesta.tipo == 'victor_salas') {
					location.href = 'main_app/victor_salas/';

				}if (respuesta.tipo == 'victor_vilchez') {
					location.href = 'main_app/victor_vilchez/';

				}if (respuesta.tipo == 'walter_jara') {
					location.href = 'main_app/walter_jara/';

				}if (respuesta.tipo == 'serafin_escobar') {
					location.href = 'main_app/serafin_escobar/';

				}if (respuesta.tipo == 'william_alejandria') {
					location.href = 'main_app/william_alejandria/';

				}if (respuesta.tipo == 'william_ramirez') {
					location.href = 'main_app/william_ramirez/';

				}if (respuesta.tipo == 'william_vargas') {
					location.href = 'main_app/william_vargas/';

				}if (respuesta.tipo == 'wilmer_acosta') {
					location.href = 'main_app/wilmer_acosta/';
					
                }if (respuesta.tipo == 'pikangueros') {
					location.href = 'main_app/pikangueros/';
					
                }if (respuesta.tipo == 'manager') {
					location.href = 'main_app/manager/';
					
                }if (respuesta.tipo == 'lorenzo_flores') {
					location.href = 'main_app/lorenzo_flores/';
					
                }if (respuesta.tipo == 'luis_gonzales') {
					location.href = 'main_app/luis_gonzales/';
					
                }if (respuesta.tipo == 'wiver_salazar') {
					location.href = 'main_app/wilver_salazar/';
					
                }if (respuesta.tipo == 'wilber_torres') {
					location.href = 'main_app/wilber_torres/';
                }if (respuesta.tipo == 'cesar_covenas') {
					location.href = 'main_app/cesar_covenas/';
                }if (respuesta.tipo == 'juan_ruiz') {
					location.href = 'main_app/juan_ruiz/';
					
				}else if (respuesta.tipo == 'sabino_hilario') {
					location.href = 'main_app/sabino_hilario/';
				}
			} else {
				$('.error').slideDown('slow');
				setTimeout(function () {
					$('.error').slideUp('slow');
				}, 3000);
				$('.botonlg').val('Iniciar Sesion');
			}

		})
		.fail(function (resp) {
			console.log(resp.responseText);

		})
		.always(function () {
			console.log("complete");

		});
});


$( document ).ready(function(){

    $('.button-collapse').sideNav({
    menuWidth: 170, 
    edge: 'left', 
    closeOnClick: true, 
    draggable: true
    });
	
    $('span.text-change').typed({
        strings: ["Sonrisas"], 
        typeSpeed: 60,
        backDelay: 600,
        callback: function () { $(this) }
    });

    $(function(){
    	$('a[href*="#"]').click(function() {
    		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
	            if ($target.length) {
	                var targetOffset = $target.offset().top;
	                $('html,body').animate({scrollTop: targetOffset}, 1000);
	                return false;
	            }
       		}
   		});
	});
   
    $('.scrollspy').scrollSpy();
  
    $('.smoo').smoove({opacity:'0', moveY: '90px',});
});

