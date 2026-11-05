import { web3forms } from "@/config/site";

export type SubmitResult = { ok: true } | { ok: false; error: string };

export const isWeb3FormsConfigured = () => web3forms.accessKey.trim().length > 0;

export async function submitWeb3Forms(
  subject: string,
  fields: Record<string, string>,
  fetcher: typeof fetch = fetch,
): Promise<SubmitResult> {
  if (!isWeb3FormsConfigured()) {
    return { ok: false, error: "Le formulaire n'est pas encore configuré. Merci de nous contacter par téléphone ou WhatsApp." };
  }
  try {
    const res = await fetcher(web3forms.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: web3forms.accessKey, subject, from_name: "Site La Nuit de l'Élégance", ...fields }),
    });
    let data: { success?: boolean; message?: string } = {};
    try {
      data = await res.json();
    } catch {
      /* réponse non JSON */
    }
    if (res.ok && data.success === true) return { ok: true };
    return { ok: false, error: data.message || `L'envoi a échoué (erreur ${res.status}). Merci de réessayer.` };
  } catch {
    return { ok: false, error: "Connexion impossible. Vérifiez votre accès à internet puis réessayez." };
  }
}
