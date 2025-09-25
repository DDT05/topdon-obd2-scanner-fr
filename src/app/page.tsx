import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import TranslatedImageOverlay from "@/components/TranslatedImageOverlay";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold">TOPDON</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="hover:underline">Fonctionnalités</a>
            <a href="#benefits" className="hover:underline">Avantages</a>
            <a href="#reviews" className="hover:underline">Avis Clients</a>
            <a href="#subscribe" className="hover:underline">S'abonner</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with YouTube Video */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 order-2 md:order-1">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">Scanner OBD2 TOPDON CarPal</h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-center md:text-left">Le gadget de réparation pour voiture qui fait économiser des milliers d'euros</p>
            <div className="max-w-md mx-auto md:mx-0">
              <NewsletterForm />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center items-center order-1 md:order-2 w-full">
            <div className="relative w-full aspect-video max-w-none md:max-w-[560px] rounded-lg overflow-hidden shadow-xl mb-3">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/77gYz0NLcxI?rel=0"
                title="TOPDON CarPal OBD2 Scanner Vidéo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0 rounded-lg"
              ></iframe>
            </div>
            <p className="text-center text-sm text-blue-100">
              💡 Audio français disponible dans les paramètres de la vidéo
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Caractéristiques Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Diagnostic Complet du Système</h3>
                <p className="text-gray-600">Vérification complète de la santé du véhicule avec rapports détaillés sur tous les systèmes majeurs.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Compatible iOS & Android</h3>
                <p className="text-gray-600">Fonctionne avec les appareils iOS et Android via Bluetooth pour des diagnostics pratiques partout.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">6 Services de Maintenance</h3>
                <p className="text-gray-600">Réinitialisation de l'huile, réinitialisation BMS, réinitialisation EPB, réinitialisation TPMS, adaptation du papillon des gaz et régénération FAP.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src="/images/obd2-scanner-promo.jpg"
                  alt="Pourquoi Choisir TOPDON CarPal"
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />
                <TranslatedImageOverlay
                  descriptions={{
                    title: "Pourquoi Choisir TOPDON CarPal?",
                    items: [
                      "Premier en Performance, Premier en Commodité",
                      "Plus de Puissance, Coût Inférieur",
                      "Connexion Plus Stable",
                      "Résultat de Test Plus Précis",
                      "Plus de Véhicules Pris en Charge",
                      "Interface de Menu Multilingue"
                    ]
                  }}
                  position="top-right"
                />
              </div>
              {/* Mobile French translation widget below image */}
              <div className="block md:hidden mt-4 bg-blue-600/90 text-white p-3 rounded-lg shadow-lg">
                <h4 className="font-bold text-sm mb-2">Pourquoi Choisir TOPDON CarPal?</h4>
                <ul className="text-xs space-y-1">
                  <li>Premier en Performance, Premier en Commodité</li>
                  <li>Plus de Puissance, Coût Inférieur</li>
                  <li>Connexion Plus Stable</li>
                  <li>Résultat de Test Plus Précis</li>
                  <li>Plus de Véhicules Pris en Charge</li>
                  <li>Interface de Menu Multilingue</li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pourquoi Choisir TOPDON CarPal?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Plus de Puissance, Coût Réduit - Diagnostics professionnels à prix abordable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Connexion Plus Stable - Technologie Bluetooth améliorée pour des lectures fiables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Résultats de Test Plus Précis - Lectures précises pour un entretien véhicule en toute confiance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Plus de Véhicules Compatibles - Compatible avec 99,99% des véhicules depuis 1996</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Interface de Menu Multilingue - Utilisez dans votre langue préférée</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">6 Services Essentiels de Réinitialisation</h2>
          <div className="relative w-full h-[300px] md:h-[500px] mb-8">
            <Image
              src="/images/obd2-scanner-services.jpg"
              alt="6 Services Essentiels de Réinitialisation"
              fill
              style={{ objectFit: "contain" }}
              className="rounded-lg"
            />
            <TranslatedImageOverlay
              descriptions={{
                title: "6 Services Essentiels de Réinitialisation",
                items: [
                  "Entretien Automobile Exceptionnel pour une Performance Optimale",
                  "Réinitialisation Huile",
                  "Adaptation Papillon",
                  "Réinitialisation EPB (Frein de stationnement électronique)",
                  "Réinitialisation BMS (Système de gestion de batterie)",
                  "Réinitialisation TPMS (Surveillance pression des pneus)",
                  "Régénération FAP (Filtre à particules diesel)"
                ]
              }}
              position="top-left"
            />
          </div>
          {/* Mobile French translation widget below image */}
          <div className="block md:hidden mb-8 bg-blue-600/90 text-white p-3 rounded-lg shadow-lg">
            <h4 className="font-bold text-sm mb-2">6 Services Essentiels de Réinitialisation</h4>
            <ul className="text-xs space-y-1">
              <li>Entretien Automobile Exceptionnel pour une Performance Optimale</li>
              <li>Réinitialisation Huile</li>
              <li>Adaptation Papillon</li>
              <li>Réinitialisation EPB (Frein de stationnement électronique)</li>
              <li>Réinitialisation BMS (Système de gestion de batterie)</li>
              <li>Réinitialisation TPMS (Surveillance pression des pneus)</li>
              <li>Régénération FAP (Filtre à particules diesel)</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">Réinitialisation Huile</h3>
              <p className="text-gray-600">Réinitialisation du système de durée de vie de l'huile après les vidanges pour assurer un suivi approprié.</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">Adaptation Papillon</h3>
              <p className="text-gray-600">Réapprentissage de la position du papillon pour une performance moteur plus fluide.</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">Réinitialisation EPB</h3>
              <p className="text-gray-600">Réinitialisation du système de frein de stationnement électronique après maintenance.</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">Réinitialisation BMS</h3>
              <p className="text-gray-600">Réinitialisation du système de gestion de batterie pour une charge et une alimentation appropriées.</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">Réinitialisation TPMS</h3>
              <p className="text-gray-600">Réinitialisation du système de surveillance de la pression des pneus pour des lectures précises.</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">Régénération FAP</h3>
              <p className="text-gray-600">Régénération du filtre à particules diesel pour le contrôle des émissions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* One-Stop Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Solution Tout-en-Un pour l'Entretien Automobile</h2>
          <div className="relative w-full h-[300px] md:h-[500px] mb-8">
            <Image
              src="/images/obd2-scanner-features.jpg"
              alt="Solution Tout-en-Un pour l'Entretien Automobile"
              fill
              style={{ objectFit: "contain" }}
              className="rounded-lg"
            />
            <TranslatedImageOverlay
              descriptions={{
                title: "Solution Tout-en-Un pour l'Entretien Automobile",
                items: [
                  "Votre Ressource Indispensable pour les Codes d'Erreur, Voyants d'Alerte, et Plus",
                  "Guide de Réparation OBD DTC",
                  "Bulletins de Service Technique",
                  "Localisation DLC",
                  "Bibliothèque des Voyants d'Alerte"
                ]
              }}
              position="bottom-right"
            />
          </div>
          {/* Mobile French translation widget below image */}
          <div className="block md:hidden mb-8 bg-blue-600/90 text-white p-3 rounded-lg shadow-lg">
            <h4 className="font-bold text-sm mb-2">Solution Tout-en-Un pour l'Entretien Automobile</h4>
            <ul className="text-xs space-y-1">
              <li>Votre Ressource Indispensable pour les Codes d'Erreur, Voyants d'Alerte, et Plus</li>
              <li>Guide de Réparation OBD DTC</li>
              <li>Bulletins de Service Technique</li>
              <li>Localisation DLC</li>
              <li>Bibliothèque des Voyants d'Alerte</li>
            </ul>
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl mb-8">Votre Ressource Indispensable pour les Codes d'Erreur, Voyants d'Alerte, et Plus</p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg">
              <a href="#subscribe">Recevoir des Mises à Jour sur le Produit</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Ce Que Disent Nos Clients</h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Découvrez pourquoi des milliers de conducteurs français font confiance au TOPDON CarPal pour garder leurs véhicules en parfait état
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex text-yellow-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Le TOPDON CarPal a sauvé ma journée ! Mon voyant moteur s'est allumé pendant un trajet important. J'ai connecté le scanner et j'ai pu identifier le problème en quelques minutes. Un capteur d'oxygène défectueux, facilement remplaçable. J'ai économisé une fortune en évitant le remorquage et le diagnostic au garage."
                </p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-bold">Jean-Pierre Dubois</h4>
                    <p className="text-sm text-gray-500">Propriétaire d'une Peugeot 3008</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex text-yellow-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "En tant que mécanicien amateur, cet outil est indispensable. La fonction de régénération FAP m'a permis de résoudre un problème sur mon Citroën C4 Picasso diesel sans aller chez le concessionnaire. L'application est intuitive et les instructions sont claires. Le meilleur investissement pour mon atelier personnel."
                </p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-bold">Marc Laurent</h4>
                    <p className="text-sm text-gray-500">Mécanicien amateur, Citroën C4 Picasso</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex text-yellow-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" opacity="0.3">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "J'ai acheté ce scanner pour ma Renault Clio qui avait des problèmes de démarrage intermittents. Non seulement j'ai pu diagnostiquer un problème d'injecteur, mais j'utilise maintenant le TOPDON CarPal pour vérifier régulièrement l'état de ma voiture. C'est comme avoir un médecin personnel pour votre véhicule !"
                </p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-bold">Sophie Martin</h4>
                    <p className="text-sm text-gray-500">Propriétaire d'une Renault Clio</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg">
              <a href="#subscribe">Rejoignez des milliers d'utilisateurs satisfaits</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Email Subscription Section with Urgency */}
      <section id="subscribe" className="py-8 md:py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-yellow-100 text-yellow-800 p-3 md:p-4 rounded-lg mb-6 md:mb-8 shadow-md">
            <div className="flex items-start md:items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 mr-2 flex-shrink-0 mt-0.5 md:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-bold text-sm md:text-base">Offre Spéciale : Abonnez-vous aujourd'hui et recevez notre guide exclusif "15 Astuces pour Prolonger la Vie de Votre Moteur" gratuitement ! Offre valable pour les 100 premiers inscrits seulement.</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4">Restez Informé</h2>
          <p className="text-center mb-6 md:mb-8 text-sm md:text-base px-2">Abonnez-vous à notre newsletter pour des offres exclusives, mises à jour et conseils d'entretien automobile.</p>

          <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg">
            <h3 className="text-blue-700 text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center md:text-left">Abonnez-vous Pour les Mises à Jour</h3>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base text-center md:text-left">
              Soyez le premier à connaître les nouvelles fonctionnalités, promotions et recevez des guides d'entretien automobile exclusifs. <span className="font-bold text-red-600">Ne manquez pas nos offres exclusives pour les nouveaux abonnés !</span>
            </p>

            <NewsletterForm />
            <div className="text-center mt-2">
              <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                Plus que 23 places disponibles pour l'offre spéciale !
              </span>
            </div>
            <p className="text-xs text-gray-500 text-center mt-3 md:mt-4">
              En vous abonnant, vous acceptez de recevoir des emails marketing. Vous pouvez vous désabonner à tout moment.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-6 md:mb-8">
              <h4 className="text-xl md:text-2xl font-bold mb-2">TOPDON</h4>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto">Solutions Professionnelles de Diagnostic Automobile</p>
            </div>

            <div className="flex justify-center space-x-6 mb-6">
              <a href="#features" className="hover:text-blue-400 text-sm md:text-base transition-colors">Fonctionnalités</a>
              <a href="#benefits" className="hover:text-blue-400 text-sm md:text-base transition-colors">Avantages</a>
              <a href="#reviews" className="hover:text-blue-400 text-sm md:text-base transition-colors">Avis</a>
              <a href="#subscribe" className="hover:text-blue-400 text-sm md:text-base transition-colors">Newsletter</a>
            </div>

            {/*<div className="flex justify-center space-x-4 mb-6">
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="YouTube">
                <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>*/}
          </div>

          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} TOPDON. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
