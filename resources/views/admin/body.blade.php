<!-- ======================= Cartes ================== -->
<div class="cardBox">
    <div class="card">
        <div>
            <div class="numbers">{{$user}}</div>
            <div class="cardName">Nombre total d'abonnés</div>
        </div>

        <div class="iconBx">
            <ion-icon name="people-outline"></ion-icon>
        </div>
    </div>

    <div class="card">
        <div>
            <div class="numbers">{{$book}}</div>
            <div class="cardName">Nombre total de livres</div>
        </div>

        <div class="iconBx">
            <ion-icon name="book-outline"></ion-icon>
        </div>
    </div>

    <div class="card">
        <div>
            <div class="numbers">{{$borrow}}</div>
            <div class="cardName">Livres actuellement empruntés</div>
        </div>

        <div class="iconBx">
            <ion-icon name="library-outline"></ion-icon>
        </div>
    </div>

    <div class="card">
        <div>
            <div class="numbers">{{$returned}}</div>
            <div class="cardName">Livres retournés ce mois</div>
        </div>

        <div class="iconBx">
            <ion-icon name="return-down-back-outline"></ion-icon>
        </div>
    </div>
</div>

<!-- ================ Liste des Détails des Emprunts ================= -->
<div class="details">
    <div class="recentOrders">
        <div class="cardHeader">
            <h2>Emprunts Récents</h2>
            <a href="#" class="btn">Voir Tout</a>
        </div>

        <table>
            <thead>
                <tr>
                    <td>Titre</td>
                    <td>Auteur</td>
                    <td>Statut</td>
                    <td>Date de Retour</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Le Petit Prince</td>
                    <td>Antoine de Saint-Exupéry</td>
                    <td><span class="status delivered">Retourné</span></td>
                    <td>15/09/2023</td>
                </tr>

                <tr>
                    <td>1984</td>
                    <td>George Orwell</td>
                    <td><span class="status pending">En attente</span></td>
                    <td>20/09/2023</td>
                </tr>

                <tr>
                    <td>Harry Potter</td>
                    <td>J.K. Rowling</td>
                    <td><span class="status inProgress">En cours</span></td>
                    <td>25/09/2023</td>
                </tr>

                <tr>
                    <td>Les Misérables</td>
                    <td>Victor Hugo</td>
                    <td><span class="status return">En retard</span></td>
                    <td>10/09/2023</td>
                </tr>
                <!-- ...existing code for other rows... -->
            </tbody>
        </table>
    </div>

    <!-- ================= Nouveaux Abonnés ================ -->
    <div class="recentCustomers">
        <div class="cardHeader">
            <h2>Nouveaux Abonnés</h2>

        </div>
        <table>
            <tr>
                <td width="60px">
                    <div class="imgBx"><img src="{{ asset('admin/assets/imgs/image.jpg') }}" alt="Jean Dupont"></div>
                </td>
                <td>
                    <h4>Jean Dupont <br> <span>France</span></h4>
                </td>
            </tr>

            <tr>
                <td width="60px">
                    <div class="imgBx"><img src="{{ asset('admin/assets/imgs/image3.jpg') }}" alt="Maria Rossi"></div>
                </td>
                <td>
                    <h4>Maria Rossi <br> <span>Italie</span></h4>
                </td>
            </tr>

            <tr>
                <td width="60px">
                    <div class="imgBx"><img src="{{ asset('admin/assets/imgs/image2.jpg') }}" alt="Ali Khan"></div>
                </td>
                <td>
                    <h4>Ali Khan <br> <span>Inde</span></h4>
                </td>
            </tr>
            <!-- ...existing code for other rows... -->
        </table>
    </div>
</div>
